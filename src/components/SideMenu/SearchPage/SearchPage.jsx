import React, {useState} from 'react';
import styles from "./SearchPage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addDialogAction, findDialogsAction} from "../../../store/reducers/addDialogReducer";
import {authUserAction} from "../../../store/reducers/authUserReducer";
import {changeNameAction} from "../../../store/reducers/changeNameReducer";
import {changePhotoAction} from "../../../store/reducers/changePhotoReducer";

const SearchPage = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    const userId = useSelector(state => state.changeNameReducer.userId)

    const findPerson = (email) => {

        let obj = {
            id: userId,
            email: email
        }

        fetch('http://127.0.0.1:5000//get_user', {
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then((status) => {
                    if(status.id){
                        const id = status.id;
                        const name = status.name;
                        const avatar = status.avatar;

                        let newDialog = {
                            id: id,
                            name: name,
                            avatar: avatar
                        }

                        dispatch(addDialogAction(newDialog))
                    }
            })
            .catch((error) => {
                console.log(error)
            });

        setValue('');
    }

    return (
        <div className={styles.wrapper}>
                <input
                    className={styles.inputBox}
                    placeholder={'Введите email пользователя'}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <button
                    className={styles.submitButton}
                    onClick={() => findPerson(value)}
                >Найти
                </button>
        </div>
    );
};

export default SearchPage;