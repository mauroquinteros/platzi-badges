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
    onDelete()
  }

  const handleClick = () => {
    setOpenModal((prev) => !prev);
  };
  const closeModal = (ev) => {
    if (modalRef.current === ev.target) {
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
                  <button className="Modal__button-close" onClick={handleClick}>
                    <svg height="329pt" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg" className="Modal__icon-close"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                  </button>
                  <h3 className="Modal__title fs-large">¿Estás seguro?</h3>
                  <p className="Modal__message fs-small fw-light">Estas a punto de eliminar al participante de la lista</p>
                  <div className="Modal__button-container">
                    <button className="Modal__button btn delete fw-bold" onClick={deleteBadge}>Eliminar</button>
                    <button className="Modal__butto btn fw-bold" onClick={handleClick}>Cancelar</button>
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
