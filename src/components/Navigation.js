import React from 'react';
import * as ReactNavbar from 'react-bootstrap';

const Navigation = () => {
    return (
        <ReactNavbar.Container>
            <ReactNavbar.Navbar collapseOnSelect expand="md" fixed='top' className='color-nav' style={{ marginBottom: '-40px' }}>
                <ReactNavbar.Navbar.Brand href="#home" style={{ fontSize: '20px', paddingTop: '10px', fontWeight:'bold', color:'white' }}>Home</ReactNavbar.Navbar.Brand>
                <ReactNavbar.Navbar.Toggle aria-controls="responsive-ReactNavbar.Navbar-nav" />
                <ReactNavbar.Navbar.Collapse id="responsive-ReactNavbar.Navbar-nav">
                    <ReactNavbar.Nav className="mr-auto color-link">
                        <ReactNavbar.Nav.Link href="#aboutMe" id='color-link' >AboutMe</ReactNavbar.Nav.Link>
                        <ReactNavbar.Nav.Link href="#project" id='color-link'>Projects</ReactNavbar.Nav.Link>
                            <ReactNavbar.Nav.Link href="#skills" id='color-link'>My Skills</ReactNavbar.Nav.Link>
                            <ReactNavbar.Nav.Link href="#internship" id='color-link'>Experience</ReactNavbar.Nav.Link>
                            <ReactNavbar.Nav.Link href="#education" id='color-link'>Education</ReactNavbar.Nav.Link>
                            <ReactNavbar.Nav.Link href="#language" id='color-link'>Language</ReactNavbar.Nav.Link>
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