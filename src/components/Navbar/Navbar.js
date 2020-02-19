import React, {useState} from 'react'
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Button} from 'reactstrap'
import './navbar.css'


const Sitebar = (props) => {

    let [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        let newIsOpen = !isOpen
        setIsOpen(newIsOpen);
    }

    return(
        <Navbar color='white' light expand='md'>
            <NavbarBrand href='/'>3d Forum</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
                <NavItem>
            <Button onClick={props.clicklogout} color='danger'>Logout</Button>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar