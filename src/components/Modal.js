import React, { useRef, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";

// Assets
import "../assets/sass/components/modal.scss";

const Modal = ({ isOpen, setOpenModal, onDelete }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0%)` : `translateY(-100%)`,
  });

  const deleteBadge = () => {
    onDelete();
  };

  const handleClick = () => {
    setOpenModal((prev) => !prev);
  };
  const closeModal = (ev) => {
    if (ev.target === modalRef.current) {
      setOpenModal(false);
    }
  };
  const keyPress = useCallback(
    (ev) => {
      if (ev.key === "Escape" && isOpen) {
        setOpenModal(false);
      }
    },
    [isOpen, setOpenModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {isOpen
        ? ReactDOM.createPortal(
            <section
              className="Modal__background"
              ref={modalRef}
              onClick={closeModal}
            >
              <animated.div style={animation}>
                <div className="Modal__wrapper">
                  <h3 className="Modal__title fs-large">¿Estás seguro?</h3>
                  <p className="Modal__message fs-small fw-light">
                    Estas a punto de eliminar al participante de la lista
                  </p>
                  <div className="Modal__button-container">
                    <button
                      className="Modal__button btn delete fw-bold"
                      onClick={deleteBadge}
                    >
                      Eliminar
                    </button>
                    <button
                      className="Modal__butto btn fw-bold"
                      onClick={handleClick}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </animated.div>
            </section>,
            document.getElementById("modal")
          )
        : null}
    </>
  );
};

export default Modal;
