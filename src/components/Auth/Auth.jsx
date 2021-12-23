import React, {useState} from 'react';
import s from "./Auth.module.css"
import {useDispatch, useSelector} from "react-redux";
import {authUserAction, newUserAction} from "../../store/reducers/authUserReducer";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const Auth = () => {
    const navigate = useNavigate();

    const authState = useSelector(state => state.authUserReducer.auth)
    const dispatch = useDispatch();

    const [newLog, setNewLog] = useState('')
    const [newPass, setNewPass] = useState('')
    const [newName, setNewName] = useState('')

    const enter = (email, password) => {
        const obj = {
            email: email,
            password: password
        }

        fetch('http://127.0.0.1:5000//login', {
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then( (status) => {
                if (status.ok){
                    dispatch(authUserAction({data: status.ok}))
                    navigate('/main');
                }
                console.log(status)}
            )
            .catch( (error) => {
                console.log(error)
            });

    }

    const reg = (mail, password, name) => {
        let newUser = {
            email: mail,
            name: name,
            password: password,
        }
        fetch('http://127.0.0.1:5000//register', {
            method: 'post',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, GET, PUT",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then( (status) => {
                console.log('Request succeeded with JSON response', status);
                alert('Статус регистрации ' + (status.ok ? 'Успешно' : 'Не удалось'))
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
        //dispatch(newUserAction(newUser))
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
                <button onClick={() => enter(newLog, newPass)}>Войти</button>
                <button onClick={() => reg(newLog, newPass, newName)}>Зарегестрироваться</button>
            </div>
        </div>
    );
};

export default Auth;