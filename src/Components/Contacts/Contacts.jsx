import React from 'react';
import styles from './Contact.module.css'
import Button from "../common/Button/Button";

const Contacts = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>Contacts</h1>
            <form className={styles.form}>
                <input className={styles.input} type={'text'} placeholder={'Your name'}/>
                <input className={styles.input} type={'email'} placeholder={'Your email'}/>
                <textarea className={styles.textField} placeholder={'Your offer'}/>
                <Button title={'Confirm'}/>
            </form>
        </div>
    );
};

export default Contacts;
