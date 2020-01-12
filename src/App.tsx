import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Inventory from './components/inventory/inventory';
import Home from './components/home/home';
import Invoices from './components/invoices/Invoices';
import Budgets from './components/budgets/budgets';
import Partners from './components/partners/partners';
import { IInventoryService } from './services/inventory/IInventoryService';
import { InventoryService } from './services/inventory/InventoryService';
import SideNav from './components/sideNav/SideNav';
import { Grid, Row, Col } from 'rsuite';

const App: React.FC = () => {
  let inventoryService: IInventoryService = new InventoryService();
  return (
    <Grid fluid>
      <Router>
        <Row>
          
        </Row>
        <Row>
          <Col xs={4} md={4}>
            <SideNav />
          </Col>
          <Col xs={20} md={20}>
            <Route path="/home" component={Home} exact />
            <Route path="/invoices" component={Invoices} />
            <Route path="/budgets" component={Budgets} />
            <Route path="/partners" component={Partners} />
            <Route path="/inventory" component={() => <Inventory service={inventoryService} />} /></Col>
        </Row>
      </Router>
    </Grid>
  );
}

export default App;
