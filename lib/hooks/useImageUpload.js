"use client"; // Ensure this runs on the client side

import { useState } from "react";
import axios from "axios";

const useCloudinaryUpload = (file) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cloudName = "dumqqvruw";
  const uploadPreset = "artium";
  // Uploads the image when explicitly called
  const uploadImage = async () => {
    if (!file) {
      setError("No file selected for upload.");
      return null;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      const imageUrl = response.data.secure_url;
      return imageUrl;
    } catch (err) {
      console.error("Upload failed:", err);
      setError("Upload failed. Please try again.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, uploadImage };
};

export default useCloudinaryUpload;
