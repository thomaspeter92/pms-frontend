// import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { ModalPanel } from "./Styles";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const Modal = ({ isOpen, onClose, children, title }: Props) => {
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

  return (
    <ModalPanel ref={dialogRef}>
      {/* <CloseButton>
        <CloseIcon size={20} color={color.grayDark} />
      </CloseButton> */}
      {children}
    </ModalPanel>
  );
};

export default Modal;
