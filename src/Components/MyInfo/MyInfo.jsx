import React from 'react';
import styles from './MyInfo.module.css'
import portfPhoto from '../../assets/images/PortfPhoto.jpg'

const MyInfo = () => {
    return (
        <section className={styles.myInfo}>
            <div className={styles.infoBlock}>
                <p>Hi there <span role={'img'} aria-label={'shineFace'}>😊</span></p>
                <h1>I am <span>Marodi Mykhailo</span></h1>
                <p>Front-end developer</p>
            </div>
            <div className={styles.myPhoto}>
                <img src={portfPhoto} alt={'MyPhoto'}/>
            </div>
        </section>
    );
};

export default MyInfo;
