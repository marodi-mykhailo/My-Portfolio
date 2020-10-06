import React from 'react';
import styles from './Button.module.css'
const Button = (props) => {
    return (
            <button className={styles.Button}>{props.title || "Watch"}</button>
    );
};

export default Button;
