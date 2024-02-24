import React, { Component } from 'react';
import css from './Modal.module.css'

export default class Modal extends Component {

    componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown)
	}

    componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
		if (e.key === 'Escape') {
			this.props.closeModal()
		}
	}
    
    render() {
        const { images, closeModal} = this.props;
        return (
            <div className={css.overlay} onClick={closeModal}>
                <div className={css.modal}>
                    <img src={images.largeImageURL} alt={images.tags} />
                </div>
            </div>
        )
    }
}
