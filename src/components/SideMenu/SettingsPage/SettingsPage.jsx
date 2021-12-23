import React, {useState} from 'react';
import styles from './Settings.module.css'
import {useDispatch} from "react-redux";
import {changeNameAction} from "../../../store/reducers/changeNameReducer";
import {changePhotoAction} from "../../../store/reducers/changePhotoReducer";

const SettingsPage = () => {

    const dispatch = useDispatch();
    const [newName, setNewName] = useState('');
    const [newPhotoLink, setNewPhotoLink] = useState('');

    function changePhoto(newPhotoLink){
        dispatch(changePhotoAction(newPhotoLink))
        setNewPhotoLink('')
    }

    function changeName(newName) {
        dispatch(changeNameAction(newName))
        setNewName('')
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.photo}>
                <input
                    className={styles.inputBox}
                    placeholder={'Вставьте ссылку на новую фотографию'}
                    value={newPhotoLink}
                    onChange={event => setNewPhotoLink(event.target.value)}
                />
                <button
                    className={styles.submitButton}
                    onClick={() => changePhoto(newPhotoLink)}
                >Применить</button>
            </div>

            <div className={styles.name}>
                <input
                    className={styles.inputBox}
                    placeholder={'Введите новое имя'}
                    value={newName}
                    onChange={event => setNewName(event.target.value)}
                />
                <button
                    className={styles.submitButton}
                    onClick={() => changeName(newName)}
                >Применить
                </button>
            </div>

        </div>
    );
};

export default SettingsPage;