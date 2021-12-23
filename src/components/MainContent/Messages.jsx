import React, {useState} from 'react';
import styles from "./Messages.module.css";
import {useDispatch, useSelector} from "react-redux";
import {sendMessageAction} from "../../store/reducers/sendMessageReducer";

const Message = ({key,mText, contentType}) => {

    return (
        <div className={styles.messageContainer + ' ' + `${contentType === 'outgoing' ? styles.outgoing : ''}`}>
            {mText}
        </div>
    );
};

const InputBox = () => {

    const dispatch = useDispatch();

    const [newMessage, setNewMessage] = useState('')

    const sendMessage = (text) => {
        const newMsg = {
            date: Date.now(),
            contentType: 'outgoing',
            messageText: text
        }

        dispatch(sendMessageAction(newMsg))
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
    const messagesElements = state.map(m => <Message key={m.date} mText={m.messageText} contentType={m.contentType}/>)

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