import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
// import { IonContent, IonNavBackButton } from 'reactionic';
import {Route, NavLink, HashRouter} from 'react-router-dom';

import Navbar from './SharedComponents/Navbar';
// import Sidebar from './SharedComponents/Sidebar';
import Table from './Components/Table';
import Product from './Pages/Product';
import Admin from './Pages/Admin';
import Dashboard from './Pages/Dashboard';
import Sales from './Pages/Sales';
import Accounts from './Pages/Accounts';
import IndividualOrder from './Pages/IndividualOrder';
import './App.css';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <Navbar />

            <Row>
              <Col sm={2}>



                <ul className="header">



                  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                  <li><NavLink to="/sales">Sales</NavLink></li>
                  <li><NavLink to="/products">Products</NavLink></li>
                  <li><NavLink to="/accounts">Accounts</NavLink></li>

                  <li><NavLink to="/admin">Admin</NavLink></li>
                  <li><NavLink to="/table">Table</NavLink></li>
                </ul>
              </Col>

              <Col>
                <div className="content">

                  <Route path="/dashboard" component={Dashboard}/>
                  <Route path="/sales" component={Sales}/>
                  <Route path="/products" component={Product}/>
                  <Route path="/accounts" component={Accounts}/>

                  <Route path="/admin" component={Admin}/>
                  <Route path="/table" component={Table}/>
                </div>
              </Col>
            </Row>
          </div>
        </HashRouter>
    );
  }
}

export default App;
