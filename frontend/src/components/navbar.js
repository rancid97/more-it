import React from 'react'
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <motion.main initial={{x: -200, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ease: "easeIn", duration: 1}} exit={{ opacity: 1 }}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/"><b>more-IT</b><p>usługi informatyczne</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-auto font-weight-bold" >
                        <Nav.Link as={Link} className='mr-4 ml-4' to="/">O nas</Nav.Link>
                        <NavDropdown className='mr-4 ml-4' title="Usługi Informatyczne" id="basic-nav-dropdown">
                            <NavDropdown.Item href="uslugi/1">Usługa 1</NavDropdown.Item>
                            <NavDropdown.Item href="uslugi/2">Usługa 2</NavDropdown.Item>
                            <NavDropdown.Item href="uslugi/3">Usługa 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="uslugi/4">Usługa 4</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} className='mr-4 ml-4' to="/opinie">Opinie</Nav.Link>
                        <Nav.Link as={Link} className='mr-4 ml-4' to="/kontakt">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </motion.main>
    )
}

export default NavBar
