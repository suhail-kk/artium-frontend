"use client"

import Link from 'next/link'
import React, { useState } from 'react'

import { Popconfirm, Table } from 'antd'
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

import ImageView from '@/lib/components/display/ImageView'
import SearchInput from '@/lib/components/input/SearchInput'
import CustomPagination from '@/lib/components/input/CustomPagination'
import Button from '@/lib/components/display/Button'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteStage, getStages } from '@/lib/services/stages'
import Loader from '@/lib/components/display/Loader'
import CreateAndUpdateModal from '@/lib/components/pages/stages/CreateAndUpdateModal';
import useApi from '@/lib/hooks/useApi';
import useToast from '@/lib/hooks/useToast';
import useDebounce from '@/lib/hooks/useDebounce';


export default function Page() {
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("")
    const [modal, setModal] = useState(false)
    const [selectedStage, setSelectedStage] = useState(null);

    const queryClient = useQueryClient()
    const { error, success } = useToast()
    const debouncedQuery = useDebounce(query, 300);

    const API_deleteStage = useApi(deleteStage)

    const { data, isLoading } = useQuery({
        queryKey: ["stages-list", page, debouncedQuery],
        queryFn: () => getStages({ search: debouncedQuery, page, limit: 10 }),
    });

    const columns = [
        {
            title: "Name",
            render: (data) => (
                (
                    <Link href={""} className='flex flex-row gap-2 items-center'>
                        <ImageView src={data?.image} imageStyle="h-7 w-7 object-cover rounded-full" />
                        <u>{data?.name}</u>
                    </Link>
                )
            ),
            key: 'name',
        },
        {
            title: "Location",
            render: (data) => (
                <div className='flex flex-row gap-2 items-center'>
                    <p>{data?.location}</p>
                </div>
            ),
            key: 'location',
        },
        {
            title: "Action",
            render: (data) => (
                <div className='flex flex-row gap-2 items-center'>
                    <AiFillEdit onClick={() => handleModal(data)} className='w-5 cursor-pointer h-5' />
                    <Popconfirm
                        title="Delete Stage"
                        description="Are you sure you want to delete this stage?"
                        onConfirm={() => handleDeleteStage(data?._id)}
                        okText="Confirm"
                        cancelText="Cancel"
                        placement="leftBottom"

                    >
                        <button><MdDelete className='w-5 h-5' /></button>
                    </Popconfirm>

                </div>
            ),
            key: 'time',
        },
    ]

    const onPaginationChange = (page) => {
        setPage(page)
    }

    const handleModal = (stageData = null) => {
        setSelectedStage(stageData);
        setModal(!modal);
    };

    const handleDeleteStage = async (id) => {
        try {
            const { isError } = await API_deleteStage.request(id)
            if (isError) {
                error("Failed to delete stage")
            } else {
                success("Stage deleted successfully")
                queryClient.invalidateQueries(["stages-list"])
            }
        } catch (error) {

        }
    }

    const stages = data?.data || [];
    const meta = data?.meta || {};

    return (<div className='w-full mt-4 flex flex-col gap-4 items-center'>
        <div className='w-full flex justify-between items-center'>
            <p className='text-lg sm:text-2xl text-primary font-semibold w-full text-start'>Stages</p>

            <div className='w-full flex justify-end gap-4'>
                <Button onClick={() => setModal(true)} additionalClass="w-32 !py-2">Add New</Button>
                <CreateAndUpdateModal modal={modal} handlecloseModal={() => setModal(false)} data={selectedStage} />
                <SearchInput onChange={(e) => setQuery(e.target.value)} value={query} />
            </div>
        </div>
        {
            isLoading ? <Loader /> : (
                <> <div className='w-full'>
                    <Table pagination={false} columns={columns} dataSource={stages} />
                </div>
                    <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={meta?.total} />
                </>
            )
        }
    </div>)
}
