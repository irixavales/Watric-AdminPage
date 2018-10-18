import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Dashboard from '../Pages/Dashboard';
import Sales from '../Pages/Sales';
import Product from '../Pages/Product';
import Accounts from '../Pages/Accounts';

export default class NavbarComponent extends React.Component {
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
                <Navbar color="blue" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Watric Logo</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                          </NavItem>
                          <NavItem active>
                            <NavLink to="/sales">Sales</NavLink>
                          </NavItem>
                          <NavItem active>
                            <NavLink to="/products">Products</NavLink>
                          </NavItem>
                          <NavItem active>
                            <NavLink to="/accounts">Accounts</NavLink>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem active>
                              <NavLink to="#">Notifications</NavLink>
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
