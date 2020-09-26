import React from 'react';
import styles from './Skill.module.css'
import { FaReact } from 'react-icons/all';
const Skill = (props) => {
    return (
        <div className={styles.skillBox}>
            <div className={styles.icon}>
                <FaReact/>
            </div>
            <h3>React</h3>
            <div className={styles.descBlock}>
                <p>React (also known as React.js or ReactJS) is an open-source, front end,
                    JavaScript library for building user interfaces or UI components.
                    It is maintained by Facebook and a community of individual developers and companies.</p>
            </div>
        </div>
    );
};

export default Skill;
