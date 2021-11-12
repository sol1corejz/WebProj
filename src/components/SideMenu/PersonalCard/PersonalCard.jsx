import React from 'react';
import styles from "./PersonalCard.module.css";
import {Link} from "react-router-dom";

const Name =(props) =>{
    return(
        <div className={styles.Name}>{props.name}</div>
    )
}

const PersonalCard = () => {
    return (
            <div className={styles.PersonalCard}>

                    <img className={styles.PersonalPhoto}
                         src="https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj"
                         alt="ProfilePhoto"
                    />

                <Name name={'Вадим Казаев'}>YourName</Name>
                <div className={styles.Buttons}>
                    <Link to={'/search'} className={styles.searchButton}/>
                    <Link to={'/settings'} className={styles.settingsButton}/>
                </div>
            </div>
    );
};

export default PersonalCard;