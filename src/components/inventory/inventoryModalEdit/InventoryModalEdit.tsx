import React, { useState } from 'react'
import { Modal, Button, InputGroup, Icon, Input } from 'rsuite';
import { IInventoryModalEditProps } from './IInventoryModalEditProps';
import { IProduct } from '../../../models/IProduct';

const InventoryModalEdit = (props: IInventoryModalEditProps) => {

  const [state, setState] = useState({
    selectedProduct: props.product,
  });

  const handleSave = () => {
    props.handleSave(state.selectedProduct);
  }
  const handleInputChange = (event: React.MouseEvent<HTMLInputElement>, newValue: string, propertyName: string, isNumber: boolean = true) => {
    let newProduct: IProduct = state.selectedProduct;
    if (isNumber) {
      newProduct[propertyName] = parseFloat(newValue);
    } else {
      newProduct[propertyName] = newValue;
    }
    this.setState({ selectedProduct: newProduct });
  }
  return (
    <Modal backdrop={true} show={props.showModalEdit} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Addon>
            <Icon icon="avatar" />
          </InputGroup.Addon>
        </InputGroup>
        <Input
          placeholder={'name'}
          onChange={
            (newValue: string, event: any, ) => {
              handleInputChange(event, newValue, 'name', false);
            }
          } />
        <Input
          placeholder={'reference'}
          onChange={
            (newValue: string, event: any, ) => {
              handleInputChange(event, newValue, 'reference', false);
            }
          } />
        <Input
          placeholder={'category'}
          onChange={
            (newValue: string, event: any, ) => {
              handleInputChange(event, newValue, 'category', false);
            }
          } />
        <Input
          placeholder={'description'}
          onChange={
            (newValue: string, event: any, ) => {
              handleInputChange(event, newValue, 'description', false);
            }
          } />
        <Input
          placeholder={'type'}
          onChange={
            (newValue: string, event: any, ) => {
              handleInputChange(event, newValue, 'type', false);
            }
          } />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSave} appearance="primary">
          Ok
            </Button>
        <Button onClick={props.handleClose} appearance="subtle">
          Cancel
            </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default InventoryModalEdit;