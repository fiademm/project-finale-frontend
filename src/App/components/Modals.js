import React from 'react';

const Modal = (props, {isOpen, onClose}) => {
    return(
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: isOpen ? "block" : "none",
          }}>
            <div style={{ padding: '10px'}}>
                <h2>{props.modalTitle}</h2>
                <p>{props.modalText}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;