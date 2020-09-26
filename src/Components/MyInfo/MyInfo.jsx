import React from 'react';
import styles from './MyInfo.module.css'
import portfPhoto from '../../assets/images/PortfPhoto.jpg'

const MyInfo = () => {
    return (
        <section className={styles.myInfo}>
            <div className={styles.infoBlock}>
                <p>Hi there 😊</p>
                <h1>I am <span>Marodi Mykhailo</span></h1>
                <h2>Front-end developer</h2>
            </div>
            <div className={styles.myPhoto}>
                <img src={portfPhoto} alt={'My Photo'}/>
            </div>
        </section>
    );
};

export default MyInfo;
