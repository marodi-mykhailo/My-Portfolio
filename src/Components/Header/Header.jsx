import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={style.logo}>
                <h1>My portfolio</h1>
            </div>
            <nav className={style.navBar}>
                <ul>
                    <li>Main</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
