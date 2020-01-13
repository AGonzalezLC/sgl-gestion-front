import React from 'react'
import { Sidenav, Nav, Icon, Dropdown } from 'rsuite';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const classNames = {
        navItem: {
            display: 'block',
        },
        headerStyles: {
            padding: 20,
            fontSize: 16,
            background: '#34c3ff',
            color: ' #fff'
        },
    }
    return (
        <div style={{ width: 250 }}>
            <Sidenav defaultOpenKeys={['3', '4']}>
                <Sidenav.Header>
                    <div style={classNames.headerStyles}>SGL Gestión</div>
                </Sidenav.Header>
                <Sidenav.Body>
                    <Nav>
                        <Dropdown eventKey="1" title="Facturación" icon={<Icon icon="magic" />}>
                            <Dropdown.Item divider />
                            <Dropdown.Item eventKey="3-1">
                                <Link style={classNames.navItem} to="/budgets">Presupuestos</Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="3-2">
                                <Link style={classNames.navItem} to="/invoices">Facturas</Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="3-3">
                                <Link style={classNames.navItem} to="/home">Resumen</Link>
                            </Dropdown.Item>
                        </Dropdown>
                        <Nav.Item divider />
                        <Dropdown eventKey="3" title="Productos" icon={<Icon icon="circle" />}>
                            <Dropdown.Item eventKey="4-1">
                                <Link style={classNames.navItem} to="/inventory">Inventario</Link>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="4-2">
                                <Link style={classNames.navItem} to="/inventory">Catálogo</Link>
                            </Dropdown.Item>
                        </Dropdown>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    )
}
export default SideNav;