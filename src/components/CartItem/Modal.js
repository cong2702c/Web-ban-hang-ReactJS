
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,isVisibleModal,toggle,subQuatity,selected
  } = props;

  return (
    <div>
      <Modal isOpen={isVisibleModal} fade={false} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Thông báo!</ModalHeader>
        <ModalBody>
          Bạn có muốn xoá sản phẩm  {selected?selected.name:""} khỏi giỏ hàng không?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={subQuatity}>OK</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;