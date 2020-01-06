import axios from 'axios'

import { IInventoryService } from "./IInventoryService";
import { IInventoryFilter } from "../../interfaces/filters/IInventoryFilter";
import { IProduct } from "../../models/IProduct";

export class InventoryService implements IInventoryService {

    public async getAll(page: number = 1): Promise<any> {
        return await axios.get(`http://localhost:4000/products/${page}`);
    }

    public async getBy(filter: IInventoryFilter): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async save(product: IProduct): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async delete(productId: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async getById(): Promise<any> {
        throw new Error("Method not implemented.");
    }


}