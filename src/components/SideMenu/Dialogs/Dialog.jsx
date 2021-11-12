import React from 'react';
import styles from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const Avatar = (props) => {
    return (
        <img className={styles.avatar}
             src="https://placepic.ru/wp-content/uploads/2018/01/art-krasivyie-kartinki-Putin-politika-1331294.jpeg"
             alt="logo"
        />
    );
};

const DialogName = (props) => {
    return (
        <p>
            {props.name}
        </p>
    );
};

const Dialog = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`messages/dialog${props.id}`} activeClassName={styles.activeLink}>
                <Avatar/>
                <DialogName name={props.name}/>
            </NavLink>
        </div>
    );
};

export default Dialog;