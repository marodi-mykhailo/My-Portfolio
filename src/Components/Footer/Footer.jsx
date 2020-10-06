import React from 'react';
import styles from './Footer.module.css'
import {FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/all";

const Footer = () => {
    return (
        <footer className={styles.footer}>
                <h1 className={styles.header}>My Social</h1>
                <div className={styles.mediaBox}>
                    <div  className={styles.link}>
                        <div className={styles.iconBox}><FaFacebookF/></div>
                    </div>
                    <div  className={styles.link}>
                        <div className={styles.iconBox}><FaTwitter/></div>
                    </div>
                    <div  className={styles.link}>
                        <div className={styles.iconBox}><FaGithub/></div>
                    </div>
                    <div  className={styles.link}>
                        <div className={styles.iconBox}><FaLinkedinIn/></div>
                    </div>
                </div>
            <div className={styles.copyrightWrap}><span>&copy;</span> 2020 All rights reserved</div>
        </footer>
    );
};

export default Footer;
