import React, { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import useApi from "@/lib/hooks/useApi";
import useToast from "@/lib/hooks/useToast";
import useCloudinaryUpload from "@/lib/hooks/useImageUpload";

import CustomModal from "@/lib/components/display/Modal";
import FileInput from "@/lib/components/input/FileInput";
import TextInput from "@/lib/components/input/TextInput";
import Button from "@/lib/components/display/Button";

import { createEvent, updateEvent } from "@/lib/services/event";
import { acceptedFiles, errorSetter } from "@/lib/utils/helper";
import { useQueryClient } from "@tanstack/react-query";
import TextAreaInput from "@/lib/components/input/TextAreaInput";
import { useEventTypes, useGenders, useInvigilator, useStages } from "@/lib/hooks/useDropdowns";
import SelectInput from "@/lib/components/input/Select";
import { Switch } from "antd";

export default function CreateAndUpdateEventModal({ data, modal, handlecloseModal }) {
    const queryClient = useQueryClient()
    const { success, error } = useToast();
    const API_createEvent = useApi(createEvent);
    const API_updateEvent = useApi(updateEvent);

    const [preview, setPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const { data: gender, isLoading: genderLoading } = useGenders()
    const { data: stages, isLoading: stagesLoading } = useStages()
    const { data: eventTypes, isLoading: eventTypesLoading } = useEventTypes()
    const { data: invigilators, isLoading: invigilatorsLoading } = useInvigilator()
    const { image, loading, error: uploadError, uploadImage } = useCloudinaryUpload(selectedFile);

    const {
        watch,
        reset,
        control,
        setValue,
        handleSubmit,
        clearErrors,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "Writing malayalam",
            ideal_for: "",
            type: "",
            stage: "",
            date: "12/01/2025",
            time: "12:30 PM",
            image: "",
            rules: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            invigilator: '',
            is_published: false,
            maxium_num_participants: 1,
            program: '6746c7f3135664bde0cd9dc4'
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

            console.log(params)


            const payloadData = {
                name: params?.name,
                date: params?.date,
                time: params?.time,
                rules: params?.rules,
                image: uploadedImageUrl,
                type: params?.type?.value,
                stage: params?.stage?.value,
                ideal_for: params?.gender?.value,
                is_published: params?.is_published,
                program: '6746c7f3135664bde0cd9dc4',
                invigilator: params?.invigilator?.value,
                maxium_num_participants: params?.maxium_num_participants,
            };

            const response = data
                ? await API_updateEvent.request({
                    event_id: data?._id,
                    ...payloadData,
                })
                : await API_createEvent.request(payloadData);

            if (response?.isError) {
                errorSetter(response?.errors, setError);
                error(response?.errors[0]?.message || "Failed to create event");
            } else {
                reset();
                setPreview(null)
                setSelectedFile(null)
                success("Event created successfully");
                queryClient.invalidateQueries(["events-list"])
                handlecloseModal();
            }
        })();
    };

    const availableInvigilators = useMemo(() => {
        return invigilators?.map((item) => ({
            _id: item?.user_id,
            full_name: item?.full_name
        }))
    }, [invigilators])


    return (
        <CustomModal title={data ? "Edit event details" : "Add new event"} modal={modal} handleCloseModal={handlecloseModal}>
            <div className="flex flex-col gap-2 bg-white">
                <FileInput
                    preview={preview}
                    setPreview={setPreview}
                    onChange={(e) => setSelectedFile(e?.target?.files[0])}
                    acceptedFiles={acceptedFiles("Photo")}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Controller
                        control={control}
                        name="name"
                        rules={{
                            required: "Name is required.",
                            minLength: { value: 3, message: "Name must be at least 3 characters." },
                            maxLength: { value: 50, message: "Name must be at most 50 characters." },
                        }}
                        render={({ field }) => <TextInput label="Name" placeholder="Enter event name" {...field} error={errors.name} />}
                    />


                    <Controller
                        control={control}
                        name="date"
                        rules={{
                            required: "Date is required.",
                            pattern: {
                                value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
                                message: "Date must be in DD/MM/YYYY format."
                            }
                        }}
                        render={({ field }) => <TextInput label="Date" placeholder="DD/MM/YYYY" {...field} error={errors.date} />}
                    />

                    <Controller
                        control={control}
                        name="time"
                        rules={{
                            required: "Time is required.",
                            pattern: {
                                value: /^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/,
                                message: "Time must be in 12-hour format (hh:mm AM/PM)."
                            }
                        }}
                        render={({ field }) => <TextInput label="Time" placeholder="hh:mm AM/PM" {...field} error={errors.time} />}
                    />

                    <Controller
                        control={control}
                        name="maximum_num_participants"
                        rules={{
                            required: "Maximum number of participants is required.",
                            min: { value: 1, message: "Must be at least 1 participant." },
                            max: { value: 100000, message: "Must be at most 100000 participants." },
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Must be a valid number."
                            }
                        }}
                        render={({ field }) => <TextInput label="Maximum Participants" placeholder="Enter max participants" {...field} error={errors.maximum_num_participants} />}
                    />

                    <Controller
                        control={control}
                        name="gender"
                        rules={{
                            required: 'Gender is required',
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <SelectInput options={gender} disabled={genderLoading} valueKey='_id' labelKey='name' label="Gender" placeholder="Select gender" onChange={onChange} value={value} error={errors.gender} />
                        )}
                    />
                    <Controller
                        control={control}
                        name="type"
                        rules={{
                            required: 'Event type is required',
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <SelectInput options={eventTypes} disabled={eventTypesLoading} valueKey='_id' labelKey='name' label="Event type" placeholder="Select event type" onChange={onChange} value={value} error={errors.type} />
                        )}
                    />
                    <Controller
                        control={control}
                        name="invigilator"
                        rules={{
                            required: 'Invigilator is required',
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <SelectInput options={availableInvigilators} disabled={invigilatorsLoading} valueKey='_id' labelKey='full_name' label="Invigilator" placeholder="Select invigilator" onChange={onChange} value={value} error={errors.invigilator} />
                        )}
                    />
                    <Controller
                        control={control}
                        name="stage"
                        rules={{
                            required: 'Stage is required',
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <SelectInput options={stages} disabled={stagesLoading} valueKey='_id' labelKey='name' label="Stage" placeholder="Select stage" onChange={onChange} value={value} error={errors.stage} />
                        )}
                    />
                </div>


                <Controller
                    control={control}
                    name="rules"
                    rules={{ required: "Rules are required." }}
                    render={({ field }) => <TextAreaInput label="Rules" placeholder="Enter event rules" {...field} error={errors.rules} />}
                />
                <div className="flex gap-2 mt-2 items-center">

                    <Controller
                        control={control}
                        name="is_published"
                        render={({ field }) => (
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={field.value} // Ensure it reflects the current state
                                    onChange={(e) => field.onChange(e.target.checked)} // Update state correctly
                                    className="w-5 h-5"
                                />

                            </label>
                        )}
                    />
                    <p className="text-primary text-[14px] font-semibold leading-[23px]">Publish event</p>
                </div>

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
