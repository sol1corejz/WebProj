import React from 'react';
import styles from "./SideMenu.module.css";
import Dialog from "./Dialogs/Dialog";
import PersonalCard from "./PersonalCard/PersonalCard";
import {useSelector} from "react-redux";

const SideMenu = () => {
    console.log(useSelector(state => state.addDialogReducer.dialogsPage))
    const state = useSelector(state => state.addDialogReducer.dialogsPage)
    console.log(state)
    const dialogElements = state.map( d => <Dialog id={d.id} name={d.name}/>);
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