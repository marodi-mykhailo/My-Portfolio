import React from 'react';
import styles from './RemoteWork.module.css'
import Button from "../common/Button/Button";

const RemoteWork = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>consider the possibility of remote work</h1>
            <div className={styles.buttonWrapper}>
                <Button/>
            </div>
        </div>
    );
};

export default RemoteWork;
