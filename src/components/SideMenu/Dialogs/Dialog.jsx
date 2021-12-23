import React from 'react';
import styles from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addDialogAction} from "../../../store/reducers/addDialogReducer";
import {findMessageAction} from "../../../store/reducers/sendMessageReducer";

const Avatar = (props) => {
    return (
        <img className={styles.avatar}
             src={props.avatar}
             alt="friend's Photo"
        />
    );
};

const DialogName = (props) => {
    return (
        <p>
            {props.name}
        </p>
    );
};

const Dialog = (props) => {

    const dispatch = useDispatch();

    const myId = useSelector(state => state.changeNameReducer.userId)
    const userId = props.id;

    const loadMessages = () => {

        let obj = {
            myId: myId,
            userId: userId
        }

        fetch('http://127.0.0.1:5000//get_massages',{
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
                if(status){

                    let messages = status.messages
                    dispatch(findMessageAction({messages: messages, id:userId}))

                }
            })
            .catch((error) => {
                console.log(error)
            });

    }

    return (
        <div className={styles.dialog}>
            <NavLink to={`messages/${props.id}`} onClick={() => loadMessages()}>
                <Avatar avatar={props.avatar}/>
                <DialogName name={props.name}/>
            </NavLink>
        </div>
    );
};

export default Dialog;