import React, {useState} from 'react';
import s from "./Auth.module.css"
import {useDispatch, useSelector} from "react-redux";
import {authUserAction} from "../../store/reducers/authUserReducer";
import {useNavigate} from "react-router-dom";
import {changeNameAction} from "../../store/reducers/changeNameReducer";
import {changePhotoAction} from "../../store/reducers/changePhotoReducer";
import {addDialogAction, findDialogsAction} from "../../store/reducers/addDialogReducer";


const Auth = () => {
    const navigate = useNavigate();

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
            .then(response => response.json())
            .then((status) => {

                if (status.user) {
                    dispatch(authUserAction({data: true}))

                    const id = status.user.id;
                    const name = status.user.name;
                    const avatar = status.user.avatar;
                    const friends = status.friends;

                    dispatch(changeNameAction({name, id}));
                    dispatch(changePhotoAction({avatar, id}))
                    dispatch(findDialogsAction(friends))

                    navigate('/main');
                } else {
                    alert("Неправильный логин или пароль")
                }
            })
            .catch((error) => {
                console.log(error)
            });

    }


    const reg = (mail, password, name) => {

        if (mail.length < 2 || password.length < 2 || name.length < 2) return

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
            .then((status) => {
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