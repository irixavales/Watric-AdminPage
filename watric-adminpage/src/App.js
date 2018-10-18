import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Logo from './Static/FullSizeRender.jpg';

import Dashboard from './Pages/Dashboard';
import Sales from './Pages/Sales';
import Product from './Pages/Product';
import Accounts from './Pages/Accounts';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
              <div>
                <Navbar color="teal accent-2" dark expand="md" scrolling sticky="top">
                    <NavbarBrand href="/">
                        <img src={Logo} height="35" width="auto" alt="" />
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink to="/sales">Sales</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink to="/products">Products</NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink to="/accounts">Accounts</NavLink>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem active>
                              <NavLink to="#"><i class="fa fa-bell" aria-hidden="true"></i></NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Profile</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem href="#">Manage Account</DropdownItem>
                                  <DropdownItem href="#">Change Password</DropdownItem>
                                  <DropdownItem href="#">Sign Out</DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>

                <div>
                  <Route path="/dashboard" component={Dashboard}/>
                  <Route path="/sales" component={Sales}/>
                  <Route path="/products" component={Product}/>
                  <Route path="/accounts" component={Accounts}/>
                </div>
              </div>

            </Router>
        );
    }
}

export default App;
