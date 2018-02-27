import React, { Component } from 'react';

const ModalContent = props => {
        return (
            <div>
                <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                <div>{props.modalMessage}</div>
                <button onClick={props.closeModal}>close</button>
            </div>
        );
    };

export default ModalContent;