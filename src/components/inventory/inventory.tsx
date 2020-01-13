import React, { Component } from 'react'
import { IProduct } from '../../models/IProduct';
import { IInventoryService } from '../../services/inventory/IInventoryService';
import ProductsTable from './productsTable/productsTable';
import { IBaseState } from '../../interfaces/IBaseState';
import DeleteDialog from '../deleteDialog/deleteDialog';
import { Grid, Row, Col, Button, Icon, Divider } from 'rsuite';
import FilterComponent from '../filterComponent/filterComponent';

export interface InventoryState extends IBaseState {
    products: IProduct[];
    showDeleteConfirmation: boolean;
    showModalEdit: boolean;
    selectedProduct: IProduct;
}

export interface InventoryProps {
    service: IInventoryService;
}

export default class Inventory extends Component<InventoryProps, InventoryState> {

    constructor(props: Readonly<InventoryProps>) {
        super(props);
        this.state = {
            products: [],
            showDeleteConfirmation: false,
            selectedProduct: this.emptyProduct(),
            showModalEdit: false,
        }
    }

    public componentDidMount() {
        this.initData();
    }

    public render() {
        let { products } = this.state;
        return (
            <div>
                <h1>Catálogo</h1>
                <Divider/>
                <Grid fluid>
                    <Row>
                        <Col xs={6}></Col>
                        <Col xs={6}>
                            <FilterComponent></FilterComponent>
                        </Col>
                        <Col xs={6}>
                            <Button color="blue" >
                                <Icon icon="plus" /> Nuevo Producto
                            </Button>
                        </Col>
                        <Col xs={6}></Col>
                    </Row>
                </Grid>
                {this.state.showDeleteConfirmation &&
                    <DeleteDialog
                        open={this.state.showDeleteConfirmation}
                        handleConfirm={this.deleteProduct}
                        handleClose={this.handleCloseDeleteDialog}
                    />
                }
                {this.state.products.length > 0 &&
                    <ProductsTable
                        loading={false}
                        items={products}
                        handleEdit={this.handleEdit}
                        handleDelete={this.handleDeleteDialog}
                        handleNew={this.handleNew}
                    />
                }
            </div>
        )
    }

    private initData() {
        let productsPromise = this.getProducts()
            .then((res) => {
                this.setState({ products: res.data.products });
            })
            .catch((error) => { console.error(error.message); });
    }

    private getProducts(): Promise<any> {
        return this.props.service.getAll(this.state.nextPage || 1);
    }

    private handleDeleteDialog = (product: any) => {
        this.setState({ showDeleteConfirmation: true, selectedProduct: product });
    }

    private handleCloseDeleteDialog = () => {
        this.setState({ showDeleteConfirmation: false, selectedProduct: this.emptyProduct() });
    }

    private deleteProduct = () => {
        this.props.service.delete(this.state.selectedProduct._id);
    }

    private handleEdit = (product: any) => {
        this.setState({ showModalEdit: true, selectedProduct: product });
    }

    private handleNew = () => {
        this.setState({ showModalEdit: true, selectedProduct: this.emptyProduct() });
    }

    private emptyProduct = (): IProduct => {
        return {
            _id: '',
            name: '',
            reference: '',
            date: new Date(),
            category: '',
            price: 0,
            stock: 0,
            description: '',
            type: '',
        };
    }
}
