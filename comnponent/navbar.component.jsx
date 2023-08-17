import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Styles from "../styles/navbar.module.css"


export default function Menubar() {
  return (
    <>
    <Navbar expand="lg" className={Styles.navber_bg}>
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home" className={Styles.nav_link}>হোম</Nav.Link>
            <Nav.Link href="#link" className={Styles.nav_link}>সর্বশেষ</Nav.Link>
            <Nav.Link href="#link" className={Styles.nav_link}>রাজনীতি</Nav.Link>
            <Nav.Link href="#link" className={Styles.nav_link}>অর্থনীতি</Nav.Link>
            <Nav.Link href="#link" className={Styles.nav_link}>জাতীয়</Nav.Link>
            <Nav.Link href="#link" className={Styles.nav_link}>আন্তর্জাতিক</Nav.Link>
            <Nav.Link href="#link" className={Styles.nav_link}>খেলা</Nav.Link>
            <Nav.Link href="#link" className={Styles.nav_link}>বিনোদন</Nav.Link>
            <Nav.Link href="#link" className={Styles.nav_link}>স্বাস্থ্য</Nav.Link>
            <Nav.Link href="#link" className={Styles.nav_link}>প্রযুক্তি</Nav.Link>
            <Nav.Link href="#link" className={Styles.nav_link}>শিক্ষা</Nav.Link>
           

            <NavDropdown title="অন্যান্য" className={Styles.nav_link} id="basic-nav-dropdown">
             
             <section className={Styles.dropdown_items}>
             <NavDropdown.Item href="#action/3.1" className={Styles.drop_nav_link}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
             </section>
          
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

  )
        

}
