import React, {useState} from 'react';
import styles from "./SearchPage.module.css";
import {useDispatch} from "react-redux";
import {addDialogAction} from "../../../store/reducers/addDialogReducer";

const SearchPage = () => {

    const dispatch = useDispatch();

    const findPerson = (name) => {
        const newDialog = {
            id: Date.now(),
            name: name
        }
        dispatch(addDialogAction(newDialog));
        setValue('');
    }

    const [value, setValue] = useState('')
    return (
        <div className={styles.wrapper}>
            <input
                className={styles.inputBox}
                placeholder={'Введите имя пользователя'}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button
                className={styles.submitButton}
                onClick={() => findPerson(value)}
            >Найти</button>
        </div>
    );
};

export default SearchPage;