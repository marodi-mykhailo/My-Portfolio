import React from 'react';
import style from './Work.module.css'

const Work = () => {
    return (
        <div className={style.workBox}>
            <div className={style.imgBox}>
                    <div className={style.wrap}>
                        <button className={style.workButton}>Watch</button>
                        <div className={style.img}>
                            <h3 className={style.title}>TodoList</h3>
                            <p className={style.description}>As its name implies, the To-do list on an article's talk page shows the list of improvements suggested for the article.</p>
                        </div>


                    </div>
            </div>
            <div className={style.workInfo}>
            </div>
        </div>
    );
};

export default Work;
