import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Inventory from './components/inventory/inventory';
import Home from './components/home/home';
import Invoices from './components/invoices/Invoices';
import Budgets from './components/budgets/budgets';
import Partners from './components/partners/partners';
import  SideNav  from './components/sideNav/SideNav';
import { IInventoryService } from './services/inventory/IInventoryService';
import { InventoryService } from './services/inventory/InventoryService';
import { Container, Sidebar, Header, Content, Footer, Divider } from 'rsuite';
import NavBar from './components/navBar/NavBar';
import './App.css';

const App: React.FC = () => {
  let inventoryService: IInventoryService = new InventoryService();
  return (
    <Router>
      <Container>
        <Sidebar><SideNav/></Sidebar>
        <Container>
          <Header>
            <NavBar/>
          </Header>
          <Content>
            <Route path="/home" component={Home} exact />
            <Route path="/invoices" component={Invoices} />
            <Route path="/budgets" component={Budgets} />
            <Route path="/partners" component={Partners} />
            <Route path="/inventory" component={() => <Inventory service={inventoryService} />} />
          </Content>
          {/* <Footer></Footer> */}
        </Container>
      </Container>
    </Router >
  );
}

export default App;
