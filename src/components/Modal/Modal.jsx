import React, { useEffect } from 'react';
import css from './Modal.module.css';

export default function Modal({ images, closeModal }) {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal]);

    return (
        <div className={css.overlay} onClick={closeModal}>
            <div className={css.modal}>
                <img src={images.largeImageURL} alt={images.tags} />
            </div>
        </div>
    );
}
