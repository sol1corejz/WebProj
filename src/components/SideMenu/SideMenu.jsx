import React from 'react';
import styles from "./SideMenu.module.css";
import Dialog from "./Dialogs/Dialog";
import PersonalCard from "./PersonalCard/PersonalCard";

const SideMenu = (props) => {

    let dialogs = [
        {id: 1, name: 'Иван'},
        {id: 2, name: 'Олег'},
        {id: 3, name: 'Андрей'},
        {id: 4, name: 'Дмитрий'},
    ]

    let dialogsElements = dialogs.map(d => <Dialog id={d.id} name={d.name}/>)

    return (
        <nav className={styles.dialogsMenu}>
            <PersonalCard/>
            {dialogsElements}
        </nav>
    );
};

export default SideMenu;