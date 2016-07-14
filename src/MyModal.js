import React from 'react';
import Modal from './Modal/Modal';

export const MY_MODAL = 'MY_MODAL';

export default () => (
  <Modal id={MY_MODAL}>
    This is a Modal
    <button className="close-modal">Close Modal</button>
  </Modal>
);
