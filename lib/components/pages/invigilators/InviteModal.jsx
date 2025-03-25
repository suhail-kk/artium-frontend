import React, { useEffect, useState } from "react";

import useApi from "@/lib/hooks/useApi";
import useToast from "@/lib/hooks/useToast";

import CustomModal from "@/lib/components/display/Modal";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFaculties, sendInvitation } from "@/lib/services/invigilators";
import { Avatar, Button, List, Skeleton } from 'antd';
import ProfileImage from "../../common/ProfileImage";
import CustomPagination from "../../input/CustomPagination";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export default function InviteModal({ modal, handlecloseModal }) {
    const [page, setPage] = useState(1)

    const { success, error } = useToast();
    const queryClient = useQueryClient()
    const API_inviteFaculty = useApi(sendInvitation);

    const { data, isLoading } = useQuery({
        queryKey: ["faculties-list", page],
        queryFn: () => getFaculties({ page, limit: 10 }),
    });
    console.log(data)


    const onLoadMore = () => {
        setPage((prev) => prev + 1)
    };

    const list = data?.data || [];
    const meta = data?.meta || {};

    const onPaginationChange = (page) => {
        setPage(page)
    }

    const handleInviteInvigilator = async (user_id) => {
        try {
            const { isError } = await API_inviteFaculty.request({ user_id })
            if (isError) {
                error("Failed to invite")
            } else {
                success("Invite send successfully")
                queryClient.invalidateQueries(["faculties-list"])
            }
        } catch (error) {
            console.log("errr", error)
        }
    }

    return (
        <CustomModal title="Invite a Faculty Member to be an Invigilator" modal={modal} handleCloseModal={handlecloseModal}>
            <div className="flex flex-col  gap-2 bg-white">
                <List
                    className="demo-loadmore-list"
                    loading={isLoading}
                    itemLayout="horizontal"

                    dataSource={list}
                    renderItem={(item) => (
                        <List.Item
                            actions={[<button disabled={API_inviteFaculty.loading} onClick={() => handleInviteInvigilator(item?._id)} className="text-blue-primary font-semibold">{API_inviteFaculty.loading ? "Loading" : "Invite"}</button>]}
                        >

                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={<ProfileImage user_name={item?.full_name} src={item?.image} />}
                                    title={item?.full_name}
                                    description={item?.email}
                                />

                            </Skeleton>
                        </List.Item>
                    )}
                />
                <div className="w-full flex justify-center my-2">
                    <CustomPagination page={page} onChange={onPaginationChange} pageSize={10} totalCount={meta?.total} />
                </div>
            </div>
        </CustomModal>
    );
}
