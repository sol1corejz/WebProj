import React, {useState} from 'react';
import styles from "./SearchPage.module.css";
import {useDispatch} from "react-redux";
import {addDialogAction} from "../../../store/reducers/addDialogReducer";

const SearchPage = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState('')

    const findPerson = (name) => {

        const newDialog = {
            dialogId: Date.now(),
            name: name
        }
        console.log(newDialog)
        dispatch(addDialogAction(newDialog));
        setValue('');
    }

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
                >Найти
                </button>
        </div>
    );
};

export default SearchPage;