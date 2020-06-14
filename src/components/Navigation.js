import React from 'react';
import * as ReactNavbar from 'react-bootstrap';

const Navigation = () => {
    return (
        <ReactNavbar.Container>
            <ReactNavbar.Navbar collapseOnSelect expand="md" fixed='top' className='color-nav' style={{ marginBottom: '-40px' , textAlign: 'center'}}>
                <ReactNavbar.Navbar.Brand href="#home" className='center' style={{ fontSize: '20px', color:'white' , display:'inline-block',paddingTop:'10px'}}>Portfolio</ReactNavbar.Navbar.Brand>
                <ReactNavbar.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactNavbar.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactNavbar.Nav className="mr-auto">
                        <ReactNavbar.Nav.Link href="#aboutMe" id='color-link' >AboutMe</ReactNavbar.Nav.Link>
                        <ReactNavbar.Nav.Link href="#project" id='color-link'>Projects</ReactNavbar.Nav.Link>
                        <ReactNavbar.NavDropdown title="More" id="collasible-nav-dropdown" style = {{Color:'red', fontSize:'15px', fontWeight:'bold'}}>
                            <ReactNavbar.NavDropdown.Item href="#skills" >My Skills</ReactNavbar.NavDropdown.Item>
                            <ReactNavbar.NavDropdown.Item href="#internship" >Experience</ReactNavbar.NavDropdown.Item>
                            <ReactNavbar.NavDropdown.Item href="#education" >Education</ReactNavbar.NavDropdown.Item>
                            <ReactNavbar.NavDropdown.Item href="#language">Language</ReactNavbar.NavDropdown.Item>
                        </ReactNavbar.NavDropdown>
                    </ReactNavbar.Nav>
                    <ReactNavbar.Nav>
                        <ReactNavbar.Nav.Link href="#socialNetwork" id='color-link' className="justify-content-end">Social Network</ReactNavbar.Nav.Link>
                        <ReactNavbar.Nav.Link eventKey={2} href="#contactMe" id='color-link' className="justify-content-end">
                            Contact Me
      </ReactNavbar.Nav.Link>
                    </ReactNavbar.Nav>
                </ReactNavbar.Navbar.Collapse>
            </ReactNavbar.Navbar>
        </ReactNavbar.Container>


    )
}

export default Navigation;