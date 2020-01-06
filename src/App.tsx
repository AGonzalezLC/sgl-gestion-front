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

const App: React.FC = () => {
  let inventoryService: IInventoryService = new InventoryService();
  return (
    <Router>
      <Route path="/home" component={Home} exact />
      <Route path="/invoices" component={Invoices} />
      <Route path="/budgets" component={Budgets} />
      <Route path="/partners" component={Partners} />
      <Route path="/inventory" component={() => <Inventory service={inventoryService} />} />
    </Router>
  );
}

export default App;