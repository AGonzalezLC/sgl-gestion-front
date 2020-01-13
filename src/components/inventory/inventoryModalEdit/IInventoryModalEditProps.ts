import { IProduct } from "../../../models/IProduct";

export interface IInventoryModalEditProps {
  handleClose: () => void;
  handleSave: (product: IProduct) => void;
  showModalEdit: boolean;
  product: IProduct;
}