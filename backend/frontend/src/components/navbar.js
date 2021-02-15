import React, {useEffect, useState} from 'react'
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import logo from './content/logo2.png'

const NavBar = ({services}) => {
    const [service, setService] = useState(null);
    useEffect(() => {
       services && setService(services);
    },[services])
    return (
        <motion.main initial={{x: -200, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ease: "easeIn", duration: 1}} exit={{ opacity: 1 }}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={{textAlign: 'center'}} as={Link} to="/">
                    <img src={logo} alt='Mateusz Orzełek, Administrowanie Systemami Informatycznymi'/>
                    <p style={{padding: 0, margin: 0, fontWeight: 'bold', fontSize: '14px'}}>Mateusz Orzełek</p>
                    <p style={{padding: 0, margin: 0, fontSize: '12px'}}>Administrowanie systemami informatycznymi</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{marginLeft: '20%'}} className="mr-auto font-weight-bold" >
                        <Nav.Link as={Link} className='mr-4 ml-4' to="/">O nas</Nav.Link>
                        <NavDropdown className='mr-4 ml-4' title="Usługi Informatyczne" id="basic-nav-dropdown">
                            {service && service.map(item =>
                                <NavDropdown.Item as={Link} key={item._id} to={`/uslugi/${item.name}`}>{item.name}</NavDropdown.Item>
                            )}
                        </NavDropdown>
                        <Nav.Link as={Link} className='mr-4 ml-4' to="/opinie">Opinie</Nav.Link>
                        <Nav.Link as={Link} className='mr-4 ml-4' to="/kontakt">Kontakt</Nav.Link>
                        <Nav.Link as={Link} className='mr-4 ml-4' to="/admin">Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </motion.main>
    )
}

export default withRouter(NavBar);
