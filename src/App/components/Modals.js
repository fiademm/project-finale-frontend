import React from 'react';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { BsAward, BsXCircleFill } from 'react-icons/bs';

const BadgeDetailsModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false)
    };

    return(
        <>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            >
                <h2>Modal Content</h2>
                <p>Some text to be displayed in the modal</p>
                <button onClick={closeModal}>Close Modal</button>
            </ReactModal>
        </>
    );
};

const CertificateDetailsModal = ({ isOpen, onClose, title, image }) => {
    return(
        <>
            <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Example Modal"
            style={{ 
                content: {
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '2%',
                    paddingInline: '18vw',
                    backgroundColor: '#f0f0f0',
                    gap: '1vw'
            }}}
            >
                <img src={image} alt={title} style={{ width: '100%'}} />
                <button onClick={onClose} className='outlined-button-1'>Close Modal</button>
            </ReactModal>
        </>
    );
};

// const ErrorDetailsModal = ({ isOpen, onClose }) => {
//     return (
//         <ReactModal isOpen={isOpen} onRequestClose={onClose} contentLabel="Dialog Box" className="modal" overlayClassName="overlay" 
//             style={{
//                 overlay: {
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 zIndex: 1000,
//                 },
//                 content: {
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 maxWidth: '500px',
//                 width: '100%',
//                 padding: '20px',
//                 borderRadius: '5px',
//                 boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
//                 },
//           }}>
//             <BsXCircleFill />
//             <h2>Error Message</h2>
//             <p>Dialog box content goes here.</p>
//             <button onClick={onClose}>Close</button>
//         </ReactModal>
//       );
// };

const ErrorDetailsModal = ({ isOpen, onClose}) => {
    return(
        <>
            <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Example Modal"
            >
                <BsXCircleFill />
                <h2>Error Message</h2>
                <p>Some text to be displayed in the modal</p>
                <button onClick={onClose}>Close Modal</button>
            </ReactModal>
        </>
    );
};

const AcknowledgementDetailsModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false)
    };

    return(
        <>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            >
                <h2>Modal Content</h2>
                <p>Some text to be displayed in the modal</p>
                <button onClick={closeModal}>Close Modal</button>
            </ReactModal>
        </>
    );
};

const PassedQuizResultsModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false)
    };

    return(
        <>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            >
                <h2>Modal Content</h2>
                <p>Some text to be displayed in the modal</p>
                <button onClick={closeModal}>Close Modal</button>
            </ReactModal>
        </>
    );
};

const FailedQuizResultsModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const closeModal = () => {
        setModalIsOpen(false)
    };

    return(
        <>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            >
                <h2>Modal Content</h2>
                <p>Some text to be displayed in the modal</p>
                <button onClick={closeModal}>Close Modal</button>
            </ReactModal>
        </>
    );
};

export { BadgeDetailsModal, CertificateDetailsModal, ErrorDetailsModal, AcknowledgementDetailsModal, PassedQuizResultsModal, FailedQuizResultsModal };