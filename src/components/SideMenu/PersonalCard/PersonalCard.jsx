import React from 'react';
import styles from "./PersonalCard.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


const Name = () => {

    const state = useSelector(state => state.changeNameReducer.userName)

    return (
        <div className={styles.Name}>{state}</div>
    )
}

const Avatar = () => {

    const state = useSelector(state => state.changePhotoReducer.photoLink)

    return(
        <div className={styles.photoWrapper}>
            <img className={styles.PersonalPhoto}
                 src={state}
                 alt="ProfilePhoto"
            />
        </div>
    )
}

const PersonalCard = () => {
    return (
        <div className={styles.PersonalCard}>
            <Avatar/>
            <Name/>
            <div className={styles.Buttons}>
                <NavLink to={'/search'} className={styles.searchButton}/>
                <NavLink to={'/settings'} className={styles.settingsButton}/>
            </div>

        </div>
    );
};

export default PersonalCard;