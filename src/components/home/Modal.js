import React from 'react'

import './Modal.css';

export const Modal = ({children, isOpen, closeModal}) => {

    const handleModalContainerClick = (e) => e.stopPropagation();

    return (
        <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modalContainer" onClick={handleModalContainerClick}>
                {children}      
            </div>
        </div> 
  )
}
