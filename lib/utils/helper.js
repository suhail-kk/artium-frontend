import { MAXIMUM_FILE_SIZE } from "./constants";

export const errorSetter = (errors, setError) => {
  return errors?.map((error) => {
    setError(error.path, {
      type: "manual",
      message: error.msg,
    });
  });
};

export const isValidFileType = (fileType, type) =>
  acceptedFiles(type).includes(fileType);

export const acceptedFiles = (type) => {
  const accepts = {
    Photo: [
      "image/png",
      "image/gif",
      "image/jpeg",
      "image/jpg",
      "image/heic",
      "image/heif",
    ],
    Video: [
      "video/mp4",
      "video/x-m4v",
      "video/*",
      "video/quicktime",
      "video/avi",
      "video/mkv",
    ],
  };
  return accepts[type] || [];
};

export const isValidFile = (file, fileType) => {
  if (!file) return { valid: false, message: "No file selected." };

  // Check file type
  const isFileTypeValid = isValidFileType(file.type, fileType);
  if (!isFileTypeValid) {
    const acceptedTypes = acceptedFiles(fileType).join(", ");
    return {
      valid: false,
      message: `Invalid file type. Allowed types: ${acceptedTypes}`,
    };
  }

  // Check file size (convert size to MB)
  const maxSizeInMB = MAXIMUM_FILE_SIZE[fileType];
  const maxSizeInBytes = maxSizeInMB * 1048576;
  if (file.size > maxSizeInBytes) {
    return {
      valid: false,
      message: `File size exceeds the ${maxSizeInMB}MB limit.`,
    };
  }

  return { valid: true };
};
