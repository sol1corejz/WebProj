import React from 'react';
import styles from "./SideMenu.module.css";
import Dialog from "./Dialogs/Dialog";
import PersonalCard from "./PersonalCard/PersonalCard";

const SideMenu = (props) => {
    let dialogsElements = props.sideMenu.dialogsPage.map(d => <Dialog id={d.id} name={d.name}/>)

    return (
        <nav className={styles.dialogsMenu}>
            <PersonalCard/>
            {dialogsElements}
        </nav>
    );
};

export default SideMenu;