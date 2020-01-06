import { IProduct } from "../../../models/IProduct";

export interface ProductsTableProps {
    items: IProduct[];
    loading: boolean;
    handleEdit: (product: IProduct) => void;
    handleDelete: (idProduct: string) => void;
    handleNew: (event:any) => void;
}