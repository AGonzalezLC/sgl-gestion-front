import React, { Component } from 'react'
import { ProductsTableProps } from './ProductsTableProps'
import { Table, IconButton, Icon } from 'rsuite';
import TablePagination from 'rsuite/lib/Table/TablePagination';
import { IProduct } from '../../../models/IProduct';

export interface ProductsTableState {
    expandedcolumn: any[];
}
export default class ProductsTable extends Component<ProductsTableProps, ProductsTableState> {

    constructor(props: Readonly<ProductsTableProps>) {
        super(props);
        this.state = {
            expandedcolumn: ['description']
        }
    }

    public render() {
        const { expandedcolumn } = this.state;
        // {`${rowData.date.getDay()}-${rowData.date.getMonth()+1}-${rowData.date.getFullYear()}`}
        return (
            <div>
                <Table
                    height={420}
                    data={this.props.items}
                    loading={this.props.loading}
                // renderRowExpanded={(rowData: IProduct) => {
                //     console.log('gello');
                //     return (
                //         <div>
                //             <p>{rowData.description}</p>
                //         </div>
                //     );
                // }}
                >
                    {/* <Table.Column width={70} align="center">
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <ExpandCell
                            rowData
                            dataKey="description"
                            expandedcolumn={expandedcolumn}
                            onChange={this.handleExpanded}
                        /> 
                    </Table.Column>
                        */}
                    <Table.Column width={300} align="center" fixed>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.Cell dataKey="name" />
                    </Table.Column>

                    <Table.Column width={100} fixed>
                        <Table.HeaderCell>Referencia</Table.HeaderCell>
                        <Table.Cell dataKey="reference" />
                    </Table.Column>

                    <Table.Column width={100}>
                        <Table.HeaderCell>Cantidad</Table.HeaderCell>
                        <Table.Cell dataKey="stock" />
                    </Table.Column>

                    <Table.Column width={100}>
                        <Table.HeaderCell>Precio</Table.HeaderCell>
                        <Table.Cell dataKey="price" />
                    </Table.Column>
                    <Table.Column width={150}>
                        <Table.HeaderCell>Categoría</Table.HeaderCell>
                        <Table.Cell dataKey="category" />
                    </Table.Column>
                    <Table.Column width={400} resizable>
                        <Table.HeaderCell>Descripción</Table.HeaderCell>
                        <Table.Cell dataKey="description" />
                    </Table.Column>
                    <Table.Column width={120} fixed="right">
                        <Table.HeaderCell>Action</Table.HeaderCell>

                        <Table.Cell>
                            {(rowData: IProduct) => {
                                return (
                                    <span>
                                        <a style={{cursor:'pointer'}} onClick={() => {
                                            this.props.handleEdit(rowData);
                                        }}> Editar </a> |{' '}
                                        <a style={{cursor:'pointer'}} onClick={() => {
                                            this.props.handleDelete(rowData._id);
                                        }}> Borrar </a>
                                    </span>
                                );
                            }}
                        </Table.Cell>
                    </Table.Column>
                </Table>

                {/* <TablePagination
                    lengthMenu={[
                        {
                            value: 10,
                            label: 10
                        },
                        {
                            value: 20,
                            label: 20
                        }
                    ]}
                    activePage={this.props.currentPage}
                    displayLength={this.props.displayLength}
                    total={this.props.items.length}
                    onChangePage={this.props.handleChangePage}
                    onChangeLength={this.props.handleChangeLength}
                /> */}
            </div>
        )
    }
    public handleExpanded = (rowData: IProduct, dataKey: any) => {
        const { expandedcolumn } = this.state;
        let open = false;
        console.log(expandedcolumn);
        console.log(rowData);

        expandedcolumn.forEach((column: any) => {
            if (column === rowData['description']) {
                open = true;
            }
        });
        this.setState({
            expandedcolumn: [rowData['description']]
        });
    }
}
// const ExpandCell = (props: any) => (
//     <Table.Cell {...props}>
//         <IconButton
//             size="xs"
//             appearance="subtle"
//             onClick={() => {
//                 props.onChange(props.rowData)
//             }}
//             icon={
//                 <Icon
//                     icon={'plus-square-o'}
//                 />
//             }
//         />
//     </Table.Cell>
// );