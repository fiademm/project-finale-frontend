import React, { useState } from 'react';
import { Modal } from 'react-overlays';

const CustomModal = ({isOpen, onClose, modalText, modalTitle}) => {
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
                <h2>{modalTitle}</h2>
                <p>{modalText}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const Overlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return(
        <div>
            <button onClick={handleOpen}>Open Overlay</button>
            {isOpen && <Modal isOpen={isOpen} onClose={handleClose}>
            <div>
                <h2>This is an overlay</h2>
                <p>You can close it by clicking anywhere on the screen outside of this box.</p>
            </div>
            </ Modal>}
       </div>
    );
}

export { CustomModal, Overlay };