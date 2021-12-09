import React from 'react';
import styles from "./PersonalCard.module.css";
import {Link} from "react-router-dom";

const Name = (props) => {
    return (
        <div className={styles.Name}>{props.name}</div>
    )
}

const Avatar = () => {
    return(
        <div className={styles.photoWrapper}>
            <img className={styles.PersonalPhoto}
                 src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"
                 alt="ProfilePhoto"
            />
        </div>
    )
}

const PersonalCard = () => {
    return (
        <div className={styles.PersonalCard}>
            <Avatar/>

            <Name name={'Вадим Казаев'}/>

            <div className={styles.Buttons}>
                <Link to={'/search'} className={styles.searchButton}/>
                <Link to={'/settings'} className={styles.settingsButton}/>
            </div>

        </div>
    );
};

export default PersonalCard;