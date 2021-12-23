import React, {useState} from 'react';
import styles from "./Messages.module.css";
import {useDispatch, useSelector} from "react-redux";
import {sendMessageAction} from "../../store/reducers/sendMessageReducer";
import {addDialogAction} from "../../store/reducers/addDialogReducer";

const Message = ({key, idFrom, idTo, mText}) => {

    const myId = useSelector(state => state.changeNameReducer.userId)

    return (
        <div className={styles.messageContainer + ' ' + `${idFrom === myId ? styles.outgoing : ''}`}>
            {mText}
        </div>
    );
};

const InputBox = () => {

    const dispatch = useDispatch();

    const myId = useSelector(state => state.changeNameReducer.userId)
    const idTo = useSelector(state => state.sendMessageReducer.id)

    const [newMessage, setNewMessage] = useState('')

    const sendMessage = (text) => {

        const obj = {
            id_from: myId,
            id_to: idTo,
            text: text,
        }

        fetch('http://127.0.0.1:5000//send_massage', {
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
                if (response.ok) {
                    dispatch(sendMessageAction(obj))
                }})
            .catch((error) => {
                console.log(error)
            });

        setNewMessage('')
    }


    return (
        <div className={styles.sendMessageBox}>
            <textarea
                className={styles.inputBox}
                placeholder={'Введите сообщение...'}
                maxLength={255}
                value={newMessage}
                onChange={event => setNewMessage(event.target.value)}
            />
            <button
                className={styles.sendButton}
                onClick={() => sendMessage(newMessage)}
            >Отправить
            </button>
        </div>
    );
};


const Messages = () => {

    const state = useSelector(state => state.sendMessageReducer.messages)
    const messagesElements = state.map(m => <Message key={m.time} mText={m.text} idFrom={m.id_from} idTo={m.id_to}/>)

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.messages}>
                {
                    messagesElements
                }
            </div>

            <InputBox/>
        </div>

    );
};

export default Messages;