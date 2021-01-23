import React from 'react'
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

const NavBar = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><b>more-IT</b><p>usługi informatyczne</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-auto font-weight-bold" >
                        <Nav.Link className='mr-4 ml-4' href="/">O nas</Nav.Link>
                        <NavDropdown className='mr-4 ml-4' title="Usługi Informatyczne" id="basic-nav-dropdown">
                            <NavDropdown.Item href="uslugi/1">Usługa 1</NavDropdown.Item>
                            <NavDropdown.Item href="uslugi/2">Usługa 2</NavDropdown.Item>
                            <NavDropdown.Item href="uslugi/3">Usługa 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="uslugi/4">Usługa 4</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='mr-4 ml-4' href="/opinie">Opinie</Nav.Link>
                        <Nav.Link className='mr-4 ml-4' href="/kontakt">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default NavBar