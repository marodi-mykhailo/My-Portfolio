import React from 'react';
import styles from './Work.module.css'
import Button from "../../common/Button/Button";

const Work = () => {
    return (
        <div className={styles.workBox}>
            <div className={styles.wrap}>
                <div className={styles.img}>
                    <h3 className={styles.title}>TodoList</h3>
                    <p className={styles.description}>As its name implies, the To-do list on an article's talk page
                        shows
                        the list of improvements suggested for the article.</p>
                    <div className={styles.workButton}>
                        <Button>Watch</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
