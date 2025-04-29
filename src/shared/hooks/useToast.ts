import { toast, ToastOptions } from "react-toastify";

export const useToast = (
  message: string,
  containerId: "main" | "modal",
  type: ToastOptions["type"] = "success"
) => {
  return toast(message, { containerId: containerId, type: type });
};
