import React from 'react';
import styles from './MySkills.module.css'
import Skill from "./Skill/Skill";

const MySkills = () => {
    return (
        <section className={styles.mySkills}>
                <h1>My Skills</h1>
            <div className={styles.skillBox}>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
        </section>
    );
};

export default MySkills;
