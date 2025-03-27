import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

import useApi from "@/lib/hooks/useApi";
import useToast from "@/lib/hooks/useToast";

import Button from "@/lib/components/display/Button";
import CustomModal from "@/lib/components/display/Modal";

import { errorSetter } from "@/lib/utils/helper";
import { useQueryClient } from "@tanstack/react-query";
import { markAttendance, updateAttendance } from "@/lib/services/attendence";

export default function MarkAttendanceModal({ data, modal, handlecloseModal }) {
    const { success, error } = useToast();

    const [loading, setLoading] = useState()
    const queryClient = useQueryClient()

    const API_createAttendance = useApi(markAttendance);
    const API_updateAttendance = useApi(updateAttendance);

    const {
        reset,
        control,
        setValue,
        handleSubmit,
        clearErrors,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            event_id: "",
            attendees: [""],
            absentees: [""],
        },
    });

    useEffect(() => {
        setValue("event_id", data?.event_id)
        setValue("attendees", data?.attendees)
        setValue("absentees", data?.absentees)
    }, [data])


    const onSubmit = async () => {
        clearErrors();

        handleSubmit(async (params) => {

            const payloadData = {
                event_id: params?.event_id,
                attendees: params?.attendees,
                absentees: params?.absentees,
            };

            const response = data
                ? await API_updateAttendance.request({
                    stage_id: data?._id,
                    ...payloadData,
                })
                : await API_createAttendance.request(payloadData);

            if (response?.isError) {
                errorSetter(response?.errors, setError);
                error(response?.errors[0]?.message || "Failed to upload attendance");
            } else {
                reset();
                setPreview(null)
                setSelectedFile(null)
                success("Attendance uploaded successfully");
                queryClient.invalidateQueries(["attendance-list"])
                handlecloseModal();
            }
        })();
    };

    return (
        <CustomModal modal={modal} handleCloseModal={handlecloseModal}>
            <div className="flex flex-col gap-2 bg-white">
                <div className="w-full justify-end flex gap-2 mt-8">
                    <Button type="gray" onClick={handlecloseModal}>
                        Cancel
                    </Button>
                    <Button onClick={onSubmit} disabled={loading}>
                        {loading ? "Uploading..." : data ? "Edit" : "Create"}
                    </Button>
                </div>
            </div>
        </CustomModal>
    );
}
