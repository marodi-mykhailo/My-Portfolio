import React from 'react';
import styles from './MyWorks.module.css'
import Work from "./Work/Work";

const MyWorks = () => {
    return (
        <section className={styles.myWorks}>
            <h1>My Works</h1>
            <div className={styles.worksBox}>
                <Work/>
                <Work/>
                <Work/>
                <Work/>
                <Work/>
            </div>
        </section>
    );
};

export default MyWorks;
