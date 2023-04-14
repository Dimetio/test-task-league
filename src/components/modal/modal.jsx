import styles from "./modal.module.css";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById("modal");

export default function Modal({ children, title, closeModal, isOpened }) {
  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpened) {
      document.addEventListener("keydown", handleEscClose);

      return () => {
        document.removeEventListener("keydown", handleEscClose);
      };
    }
  }, [isOpened]);

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.content}>
        {title && <h2 className={styles.title}>{title}</h2>}

        {children}

        <button className={styles.button_close} onClick={() => closeModal()}>
          x
        </button>
      </div>
      <ModalOverlay closeModal={closeModal} />
    </div>,
    modalRoot
  );
}
