import React, {useState} from 'react';
import s from "./Auth.module.css"
import {useDispatch, useSelector} from "react-redux";
import {authUserAction, newUserAction} from "../../store/reducers/authUserReducer";
import {useNavigate} from "react-router-dom";



const Auth = () => {
    const navigate = useNavigate();

    const authState = useSelector(state => state.authUserReducer.user)
    const dispatch = useDispatch();

    const [newLog, setNewLog] = useState('')
    const [newPass, setNewPass] = useState('')
    const [newName, setNewName] = useState('')

    const enter = (mail, password) => {
        if (mail == authState.mail && password == authState.password){
            dispatch(authUserAction({auth: true}))
            navigate(`/main`);
        }
        else {
            alert('Неверный логин или пароль!')
        }

    }

    const reg = (mail, name, password) => {
        let newUser = {
            mail: mail,
            name: name,
            password: password,
        }
        dispatch(newUserAction(newUser))
        setNewPass('')
        setNewLog('')
        setNewName('')
    }

    return (
        <div className={s.Wrapper}>
            <input
                placeholder={"Логин"}
                value={newLog}
                onChange={event => setNewLog(event.target.value)}
            />
            <input
                placeholder={"Пароль"}
                value={newPass}
                onChange={event => setNewPass(event.target.value)}
            />
            <input
                placeholder={"Имя"}
                value={newName}
                onChange={event => setNewName(event.target.value)}
            />
            <div className={s.Buttons}>
                <button onClick={ () => enter(newLog, newPass)}>Войти</button>
                <button onClick={ () => reg(newLog, newPass, newName)}>Зарегестрироваться</button>
            </div>
        </div>
    );
};

export default Auth;