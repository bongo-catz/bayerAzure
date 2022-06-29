import DropdownAddItems from './DropdownAddItems';
import DropdownViewInfo from './DropdownViewInfo';
import DropdownQueryItems from './DropdownQueryItems';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const onMouseEnter1 = () => {
        if (window.innerWidth < 960) {
            setDropdown1(false);
        } else {
            setDropdown1(true);
        }
    };

    const onMouseLeave1 = () => {
        setDropdown1(false);
    }

    const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false);
        } else {
            setDropdown2(true);
        }
    };

    const onMouseLeave2 = () => {
        setDropdown2(false);
    }

    const onMouseEnter3 = () => {
        if (window.innerWidth < 960) {
            setDropdown3(false);
        } else {
            setDropdown3(true);
        }
    };

    const onMouseLeave3 = () => {
        setDropdown3(false);
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to="/" className = "navbar-logo">
                        Database <i class="fa fa-database" aria-hidden="true"></i>
                    </Link>
                    <div className = 'menu-icon' onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to = "/home" className = 'nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className = 'nav-item'
                            onMouseEnter={onMouseEnter1}
                            onMouseLeave={onMouseLeave1}
                        >
                            <Link to = "/view_information" className = 'nav-links' onClick = {closeMobileMenu}>
                                View Information <i className = 'fas fa-caret-down' />
                            </Link>
                            {dropdown1 && <DropdownViewInfo />}
                        </li>
                        <li className = 'nav-item'
                            onMouseEnter={onMouseEnter2}
                            onMouseLeave={onMouseLeave2}
                        >
                            <Link to = "/query_information" className = 'nav-links' onClick = {closeMobileMenu}>
                                Query Information <i className = 'fas fa-caret-down' />
                            </Link>
                            {dropdown2 && <DropdownQueryItems />}
                        </li>
                        <li className = 'nav-item'
                            onMouseEnter={onMouseEnter3}
                            onMouseLeave={onMouseLeave3}
                        >
                            <Link to = "/add_information" className = 'nav-links' onClick = {closeMobileMenu}>
                                Add Information <i className = 'fas fa-caret-down' />
                            </Link>
                            {dropdown3 && <DropdownAddItems />}
                        </li>
                    </ul>
                    {button && <Button buttonStyle = 'btn--outline'>LOG IN</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;