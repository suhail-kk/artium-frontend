import React, { useRef } from 'react'
import Button from '../display/Button'
import useToast from '@/lib/hooks/useToast'
import ImageView from '../display/ImageView'
import { isValidFile } from '@/lib/utils/helper'

export default function FileInput({
    label,
    preview,
    setPreview,
    error = null,
    onChange,
    postFix = null,
    acceptedFiles = [],
    fileType = "Photo",
    maxFileSizeMB = 5,
}) {
    const { error: toastError } = useToast();
    const inputFileRef = useRef();

    const handleOpenFilePicker = () => {
        inputFileRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        // Validate the file (type and size)
        const validation = isValidFile(file, fileType, maxFileSizeMB);

        if (!validation.valid) {
            toastError(validation.message);
            return;
        }

        // Update preview and notify parent
        setPreview(URL.createObjectURL(file));
        onChange(e);
    };

    return (
        <div className="w-full flex flex-col items-center">
            {label && (
                <p className="text-[#475569] text-[14px] font-normal leading-[23px] mb-2">
                    {label} {postFix && <span>{postFix}</span>}
                </p>
            )}

            <div className="max-w-[160px]">
                <Button onClick={handleOpenFilePicker} type="black" additionalClass="!w-[150px] !py-2 !text-xs">
                    <div className="flex flex-col justify-center gap-2 items-center">
                        <ImageView src={preview} imageStyle='w-[100px] h-[100px] object-cover rounded-full' />
                        Upload Image
                    </div>
                </Button>
            </div>

            <input
                type="file"
                className="hidden"
                ref={inputFileRef}
                accept={acceptedFiles.join(", ")}
                onChange={handleFileChange}
            />

            {error && <p className="text-[#D12E34] text-md font-normal leading-[23px] mt-2">{error?.message}</p>}
        </div>
    );
}


