import React from 'react';
import styles from "./SideMenu.module.css";
import Dialog from "./Dialogs/Dialog";
import PersonalCard from "./PersonalCard/PersonalCard";
import {useSelector} from "react-redux";

const SideMenu = () => {

    const state = useSelector(state => state.addDialogReducer.dialogsPage)
    const dialogElements = state.map(d => <Dialog key={d.dialogId} id={d.dialogId} name={d.name}/>);

    return (
        <nav className={styles.dialogsMenu}>
            <PersonalCard/>
            <div className={styles.dialogs}>
                {
                    dialogElements
                }
            </div>
        </nav>
    );
};

export default SideMenu;