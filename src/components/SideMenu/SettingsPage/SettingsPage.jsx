import React, {useState} from 'react';
import styles from './Settings.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeNameAction} from "../../../store/reducers/changeNameReducer";
import {changePhotoAction, changePhotoReducer} from "../../../store/reducers/changePhotoReducer";
import {authUserAction} from "../../../store/reducers/authUserReducer";

const SettingsPage = () => {

    const dispatch = useDispatch();
    const [newName, setNewName] = useState('');
    const [newPhotoLink, setNewPhotoLink] = useState('');

    const changePhotoId = useSelector(state => state.changePhotoReducer.userId)
    const changeNameId = useSelector(state => state.changeNameReducer.userId)


    function changePhoto(newPhotoLink){

        if (newPhotoLink.length < 2){
            return
        }

        const obj = {
            id: changePhotoId,
            avatar: newPhotoLink
        }

        fetch('http://127.0.0.1:5000//renew_avatar', {
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(response => {
                if (response.ok){
                    dispatch(changePhotoAction(obj));
                }
            })
            .catch((error) => {
                console.log(error)
            });

        setNewPhotoLink('')
    }

    function changeName(newName) {

        if (newName.length < 2){
            return
        }

        const obj = {
            id: changeNameId,
            name: newName
        }

        fetch('http://127.0.0.1:5000//renew_name', {
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(response => {
                if (response.ok){
                    dispatch(changeNameAction(obj))
                }
            })
            .catch((error) => {
                console.log(error)
            });

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