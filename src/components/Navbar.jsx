import React from 'react'

const menu = [
    "Home",
    "Projects",
    "Services",
    "Contact",
    "Download CV"
];

const logo = "MR~FABRI";

const Navbar = () => {
    return (
        <nav className='nav'>
            <h2 className='title'>{logo}</h2>
            <input type="checkbox" id="btnMenu" />
            <label htmlFor="btnMenu">
                <i className="fa-solid fa-bars"></i>
            </label>
            <ul className='menu'>
                {
                    menu.map((item) => (
                        <li key={item}><a href="#">{item}</a></li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar