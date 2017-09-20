import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Menu extends React.Component {
    render () {
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">The Webshop</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                
                <Navbar.Collapse>
                    <Nav>
                        <Link to="/company">
                            <Button bsStyle="link">About</Button>
                        </Link>
                        
                        <Link to="/products">
                            <Button bsStyle="link">Products</Button>
                        </Link>
                    </Nav>
                    
                    <Nav pullRight>
                        <Link to="/checkout">
                            <Button bsStyle="success">Your cart: {this.props.cart.length} items. </Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
