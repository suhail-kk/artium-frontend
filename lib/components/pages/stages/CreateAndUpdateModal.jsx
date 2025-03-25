import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import useApi from "@/lib/hooks/useApi";
import useToast from "@/lib/hooks/useToast";
import useCloudinaryUpload from "@/lib/hooks/useImageUpload";

import CustomModal from "@/lib/components/display/Modal";
import FileInput from "@/lib/components/input/FileInput";
import TextInput from "@/lib/components/input/TextInput";
import Button from "@/lib/components/display/Button";

import { createStage, updateStage } from "@/lib/services/stages";
import { acceptedFiles, errorSetter } from "@/lib/utils/helper";
import { useQueryClient } from "@tanstack/react-query";

export default function CreateAndUpdateModal({ data, modal, handlecloseModal }) {
    const { success, error } = useToast();
    const queryClient = useQueryClient()
    const API_createStage = useApi(createStage);
    const API_updateStage = useApi(updateStage);

    const [preview, setPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const { image, loading, error: uploadError, uploadImage } = useCloudinaryUpload(selectedFile);

    console.log(data)

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
            name: "",
            location: "",
            image: "",
        },
    });

    useEffect(() => {
        setValue("name", data?.name)
        setValue("image", data?.image)
        setValue("location", data?.location)
    }, [data])


    const onSubmit = async () => {
        clearErrors();

        handleSubmit(async (params) => {
            let uploadedImageUrl = null
            if (selectedFile) {
                uploadedImageUrl = await uploadImage(selectedFile);
                if (!uploadedImageUrl) {
                    error("Image upload failed. Please try again.");
                    return;
                }
                setValue("image", uploadedImageUrl);
            }


            const payloadData = {
                name: params?.name,
                location: params?.location,
                image: uploadedImageUrl,
            };

            const response = data
                ? await API_updateStage.request({
                    stage_id: data?._id,
                    ...payloadData,
                })
                : await API_createStage.request(payloadData);
            console.log(response);

            if (response?.isError) {
                errorSetter(response?.errors, setError);
                error(response?.errors[0]?.message || "Failed to create stage");
            } else {
                reset();
                setPreview(null)
                setSelectedFile(null)
                success("Stage created successfully");
                queryClient.invalidateQueries(["stages-list"])
                handlecloseModal();
            }
        })();
    };

    return (
        <CustomModal modal={modal} handleCloseModal={handlecloseModal}>
            <div className="flex flex-col gap-2 bg-white">
                <FileInput
                    preview={preview}
                    setPreview={setPreview}
                    onChange={(e) => setSelectedFile(e?.target?.files[0])}
                    acceptedFiles={acceptedFiles("Photo")}
                />

                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: "Name is required.",
                        minLength: { value: 3, message: "Name must be at least 3 characters." },
                        maxLength: { value: 50, message: "Name must be at most 50 characters." },
                    }}
                    render={({ field }) => <TextInput label="Name" placeholder="Enter stage name" {...field} error={errors.name} />}
                />
                <Controller
                    control={control}
                    name="location"
                    rules={{
                        required: "Location is required.",
                        minLength: { value: 3, message: "Location must be at least 3 characters." },
                        maxLength: { value: 50, message: "Location must be at most 50 characters." },
                    }}
                    render={({ field }) => <TextInput label="Location" placeholder="Enter address" {...field} error={errors.location} />}
                />
                {uploadError && <p className="text-red-500">{uploadError}</p>}

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
