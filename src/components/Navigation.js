import React from 'react';
import * as ReactNavbar from 'react-bootstrap';

const Navigation = () => {
    return (
        <ReactNavbar.Container>
            <ReactNavbar.Navbar collapseOnSelect expand="sm" fixed='top' className='color-nav' style={{ marginBottom: '-40px' }}>
                <ReactNavbar.Navbar.Brand href="#home" style={{ fontSize: '20px', paddingTop: '10px', fontWeight:'bold', color:'white' }}>Home</ReactNavbar.Navbar.Brand>
                <ReactNavbar.Navbar.Toggle aria-controls="responsive-ReactNavbar.Navbar-nav" />
                <ReactNavbar.Navbar.Collapse id="responsive-ReactNavbar.Navbar-nav">
                    <ReactNavbar.Nav className="mr-auto color-link">
                        <ReactNavbar.Nav.Link href="#aboutMe" id='color-link' >AboutMe</ReactNavbar.Nav.Link>
                        <ReactNavbar.Nav.Link href="#project" id='color-link'>Projects</ReactNavbar.Nav.Link>
                        <ReactNavbar.NavDropdown title="More" id="collasible-nav-dropdown " style = {{fontSize: '15px'}}>
                            <ReactNavbar.NavDropdown.Item href="#skills" >My Skills</ReactNavbar.NavDropdown.Item>
                            <ReactNavbar.NavDropdown.Item href="#internship" >Experience</ReactNavbar.NavDropdown.Item>
                            <ReactNavbar.NavDropdown.Item href="#education" >Education</ReactNavbar.NavDropdown.Item>
                            <ReactNavbar.NavDropdown.Item href="#language">Language</ReactNavbar.NavDropdown.Item>
                        </ReactNavbar.NavDropdown>
                    </ReactNavbar.Nav>
                    <ReactNavbar.Nav>
                        <ReactNavbar.Nav.Link href="#socialNetwork" id='color-link'>Social Network</ReactNavbar.Nav.Link>
                        <ReactNavbar.Nav.Link eventKey={2} href="#contactMe" id='color-link'>
                            Contact Me
      </ReactNavbar.Nav.Link>
                    </ReactNavbar.Nav>
                </ReactNavbar.Navbar.Collapse>
            </ReactNavbar.Navbar>
        </ReactNavbar.Container>


    )
}

export default Navigation;