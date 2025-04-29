// import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { ModalBackdrop, ModalPanel } from "./Styles";
import { ToastContainer } from "react-toastify";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  //   const CloseIcon = Icons["close"];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener("close", handleClose);
  }, [isOpen, onClose]);

  return isOpen ? (
    <ModalBackdrop>
      <ModalPanel ref={dialogRef}>
        {/* <ToastContainer containerId={"modal"} /> */}
        {/* <CloseButton>
        <CloseIcon size={20} color={color.grayDark} />
        </CloseButton> */}
        {children}
      </ModalPanel>
    </ModalBackdrop>
  ) : null;
};

export default Modal;
