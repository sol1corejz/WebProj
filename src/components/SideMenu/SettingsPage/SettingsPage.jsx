import React from 'react';
import styles from './Settings.module.css'

const SettingsPage = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.photo}>
                <button className={styles.submitButton}>Выбрать новую фотографию</button>
                <button className={styles.submitButton}>Применить</button>
            </div>

            <div className={styles.name}>
                <input className={styles.inputBox} placeholder={'Введите новое имя'}/>
                <button className={styles.submitButton} >Применить</button>
            </div>

        </div>
    );
};

export default SettingsPage;