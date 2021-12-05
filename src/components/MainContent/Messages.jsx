import React from 'react';
import styles from "./Messages.module.css";

const messages = [
    {id:1, messageText: 'Text1'},
    {id:2, messageText: 'Text2'},
    {id:3, messageText: 'Text3'},
    {id:4, messageText: 'Text4'},
]

const sendMessage = () => {
    console.log('Sended')
}

const Message = (props) => {
    return (
        <div className={styles.messageContainer}>
            {props.mText}
        </div>
    );
};

const InputBox = () => {
    return (
        <div className={styles.sendMessageBox}>
            <textarea className={styles.inputBox} placeholder={'Введите сообщение...'}/>
            <button className={styles.sendButton} onSubmit={() => sendMessage()}>Отправить</button>
        </div>
    );
};

let messagesElements = messages.map(m => <Message id={m.id} mText={m.messageText}/>)

const Messages = (props) => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <InputBox/>
        </div>

    );
};

export default Messages;