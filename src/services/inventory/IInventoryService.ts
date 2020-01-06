import { IProduct } from "../../models/IProduct";
import { IInventoryFilter } from "../../interfaces/filters/IInventoryFilter";

export interface IInventoryService {
    getAll(page: number): Promise<any>;
    getBy(filter: IInventoryFilter): Promise<any>;
    save(product: IProduct): Promise<any>;
    delete(productId: string): Promise<any>;
    getById(): Promise<any>;
}