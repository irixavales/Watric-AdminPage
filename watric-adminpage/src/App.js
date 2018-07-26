import React, { Component } from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { Row, Col } from 'reactstrap';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
// import { IonContent, IonNavBackButton } from 'reactionic';
import {Route, NavLink, HashRouter} from 'react-router-dom';

import Navbar from './SharedComponents/Navbar';
// import Sidebar from './SharedComponents/Sidebar';
import Product from './Pages/Product';
// import Dashboard from './Pages/Dashboard';
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
              <div style={{background: 'white', color: '#FFF', width: 220}}>
                <SideNav highlightColor='#E91E63' highlightBgColor='lightblue' defaultSelected='dashboard'>
                    <Nav id='dashboard'>
                        <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
                        <NavText><NavLink to="/dashboard">Dashboard</NavLink></NavText>
                    </Nav>
                    <Nav id='sales'>
                        <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                        <NavText><NavLink to="/sales">Sales</NavLink></NavText>
                    </Nav>
                    <Nav id='products'>
                        <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                        <NavText><NavLink to="/products">Products</NavLink></NavText>
                    </Nav>
                    <Nav id='accounts'>
                        <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                        <NavText><NavLink to="/accounts">Accounts</NavLink></NavText>
                    </Nav>
                </SideNav>
              </div>
              </Col>

{ /*
            <Row>
              <Col sm={2}>
                <ul className="header">
                  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                  <li><NavLink to="/sales">Sales</NavLink></li>
                  <li><NavLink to="/products">Products</NavLink></li>
                  <li><NavLink to="/accounts">Accounts</NavLink></li>
                </ul>
              </Col>
*/ }
              <Col>
                <div className="content">
                  <Route path="/dashboard" component={IndividualOrder}/>
                  <Route path="/sales" component={Sales}/>
                  <Route path="/products" component={Product}/>
                  <Route path="/accounts" component={Accounts}/>
                </div>
              </Col>
            </Row>
          </div>
        </HashRouter>
    );
  }
}

export default App;
