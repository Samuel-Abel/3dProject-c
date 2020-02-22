import React, {useState} from 'react'
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
import './navbar.css'


const Sitebar = (props) => {

    let [isOpen, setIsOpen] = useState(false)

    // const toggle = () => {
    //     let newIsOpen = !isOpen
    //     setIsOpen(newIsOpen);
    // }

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return(
        <Navbar color='white' light expand='md'>
            <NavbarBrand href='/'>3d Forum</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>

                <Nav className='mr-auto' navbar>
                    <NavItem>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Links
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>3d Printing Websites</DropdownItem>
        <DropdownItem href='https://3dprintingindustry.com/3d-printing-basics-free-beginners-guide'>Beginner's Tips</DropdownItem>
        <DropdownItem href='https://3dprinting.com/what-is-3d-printing/'>What is 3d Printing?</DropdownItem>
        <DropdownItem href='https://www.3dhubs.com/guides/3d-printing/'>Helpful Guide</DropdownItem>
        <DropdownItem divider />
        <DropdownItem header>???</DropdownItem>
        <DropdownItem href='http://www.staggeringbeauty.com/'>1</DropdownItem>
        <DropdownItem></DropdownItem>
      </DropdownMenu>
    </Dropdown>
                    </NavItem>


                </Nav>
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