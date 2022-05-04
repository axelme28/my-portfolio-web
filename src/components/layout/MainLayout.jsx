import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/word.png";
import { Contact } from "../views/Contact";
import { Home } from "../views/Home";

export const MainLayout = ({ children }) => {
    const handleScroll = () => {
        const navbar = document.querySelector(".navbar");
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    };
    return (
        <div>
            <nav
                className='navbar navbar-expand-lg navbar-light px-5 fixed-top'
                onScroll={handleScroll}
            >
                <Link className='navbar-brand' to='/'>
                    <img src={logo} alt='logo' className='w-100 h-100' />
                </Link>
                <div
                    className='collapse navbar-collapse d-flex justify-content-end'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link className='btn-contact ' to='/contact'>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {children}
        </div>
    );
};
