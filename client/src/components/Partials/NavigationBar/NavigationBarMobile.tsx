/*
Wrapper component to add 
- Links
- Modal
- Logged in dropdown
*/
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './NavigationBar.css'
import { NINJA_PREP_NAVIGATION } from './NavigationBarStringIds'
import { NavBarProps } from './NavigationBarComponent'
import NavigationBarLoginModalMobile from './NavigationBarLogin/NavigationBarLoginModalMobile'
import NavigationBarLoginDropdown from './NavigationBarLogin/NavigationBarLoginDropdown'
import { NavigationBarLinks } from './NavigationBarBaseComponent'

function NavigationBarMobile(props: NavBarProps) {
    //For Shortcuts Icon
    const [showModalShortcuts, setShowModalShortcuts] = useState(false)
    const handleCloseModalShortcuts = () => setShowModalShortcuts(false)
    const handleShowModalShortcuts = () => setShowModalShortcuts(true)

    return (
        <Navbar fixed="top" expand="lg" className="px-5 py-3 navigation-bar" variant="dark">
            <Navbar.Brand as={Link} to="/" className="pl-5 ml-5">
                <img className="logo" src="./images/NinjaPrep-Logo.png" alt="logo" width="40" height="40" />
                {NINJA_PREP_NAVIGATION}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto pr-5 mr-5">
                    <NavigationBarLinks />
                    <NavigationBarLoginDropdown user={props.user} handleShow={handleShowModalShortcuts} />
                </Nav>
                <NavigationBarLoginModalMobile showShortcuts={showModalShortcuts} handleClose={handleCloseModalShortcuts} />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBarMobile