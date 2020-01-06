import React from 'react';
import { DeleteDialogProps } from './DeleteDialogProps';
import { Button, Modal } from 'rsuite';

const DeleteDialog = (props: DeleteDialogProps) => {

    return (
        <Modal show={props.open} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>Borrado permanente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Este registro se borrará permanentemente, ¿Quieres continuar?
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleConfirm} appearance="primary">Ok</Button>
                <Button onClick={props.handleClose} appearance="subtle">Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default DeleteDialog;


