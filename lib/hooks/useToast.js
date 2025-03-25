"use client";

import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
};

const useToast = () => {
  // Function to display success toast
  const success = (message, options = defaultOptions) => {
    toast.success(message, options);
  };

  // Function to display error toast
  const error = (message, options = defaultOptions) => {
    toast.error(message, options);
  };

  // Function to display warning toast
  const warning = (message, options = defaultOptions) => {
    toast.warning(message, options);
  };

  // Function to display info toast
  const info = (message, options = defaultOptions) => {
    toast.info(message, options);
  };

  // Function to dismiss all toasts
  const dismissAll = () => {
    toast.dismiss();
  };

  // Return the functions to be used outside the hook
  return { success, error, warning, info, dismissAll };
};

export default useToast;
