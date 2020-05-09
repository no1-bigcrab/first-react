import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Style = styled.div`
    .navbar {
        background-color:red;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: black;

        &:hover {
            color: blue;
        }
    }
`;
export const NavigationBar = () => (
    <Style>
        <Navbar.Brand href="/" >Code-life </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/">Contact</Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Style>
);
