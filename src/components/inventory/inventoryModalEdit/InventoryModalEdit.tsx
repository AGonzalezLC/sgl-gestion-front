import React, { useState } from 'react'
import { Modal, Button, InputGroup, Icon, Input, FormGroup, ControlLabel, FormControl, Form } from 'rsuite';
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
    setState({ selectedProduct: newProduct });
  }
  return (
    <Modal backdrop={true} show={props.showModalEdit} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <InputGroup>
            <InputGroup.Addon>
              <Icon icon="avatar" />
            </InputGroup.Addon>
            <Input
              placeholder={'Nombre del producto'}
              onChange={
                (newValue: string, event: any, ) => {
                  handleInputChange(event, newValue, 'name', false);
                }
              } />
          </InputGroup>
          <Input
            placeholder={'Referencia'}
            onChange={
              (newValue: string, event: any, ) => {
                handleInputChange(event, newValue, 'reference', false);
              }
            } />
          <Input
            placeholder={'Categoría'}
            onChange={
              (newValue: string, event: any, ) => {
                handleInputChange(event, newValue, 'category', false);
              }
            } />
          <FormGroup>
            <ControlLabel>Descripción</ControlLabel>
            <FormControl name="textarea" rows={5} componentClass="textarea"
              onChange={
                (newValue: string, event: any, ) => {
                  handleInputChange(event, newValue, 'description', false);
                }
              } />
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSave} appearance="primary">Guardar</Button>
        <Button onClick={props.handleClose} appearance="subtle">Cancelar</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default InventoryModalEdit;