import React from 'react';
import styles from "./Messages.module.css";

const messages = [
    {date:1, contentType: 'incoming', messageText: 'Hello'},
    {date:2, contentType: 'incoming', messageText: 'gay'},
    {date:3, contentType: 'incoming', messageText: 'ahahah'},
    {date:4, contentType: 'outgoing', messageText: 'Hi'},
    {date:5, contentType: 'outgoing', messageText: 'Negro'},
    {date:6, contentType: 'incoming', messageText: 'Text4'},
    {date:7, contentType: 'incoming', messageText: 'Text4'},
    {date:8, contentType: 'outgoing', messageText: 'Text4Text4Text4Text4Text4Text4'},
    {date:9, contentType: 'incoming', messageText: 'Text4'},
    {date:10, contentType: 'incoming', messageText: 'Text4'},
    {date:4, contentType: 'outgoing', messageText: 'Text4'},
    {date:4, contentType: 'outgoing', messageText: 'Text4'},
    {date:4, contentType: 'incoming', messageText: 'Text4'},
    {date:4, contentType: 'incoming', messageText: 'Text4'},
    {date:4, contentType: 'incoming', messageText: 'Text4'},
    {date:4, contentType: 'incoming', messageText: 'Text4'},
    {date:4, contentType: 'outgoing', messageText: 'Text4'},
    {date:4, contentType: 'incoming', messageText: 'Text4'},
    {date:4, contentType: 'incoming', messageText: 'Text4'},
    {date:4, contentType: 'incoming', messageText: 'Text4'},
    {date:4, contentType: 'incoming', messageText: 'bb, marginal'},
    {date:4, contentType: 'outgoing', messageText: 'bb!'},
];


const outgoingMsg = 'outgoing';


const sendMessage = (text) => {
    messages.push({date: Date.now(), contentType: outgoingMsg, messageText: text});
    console.log(messages)
}

const Message = (props) => {
    return (
        <div className={styles.messageContainer + ' ' + `${props.contentType === outgoingMsg ? styles.outgoing : ''}`}>
            {props.mText}
        </div>
    );
};

const InputBox = () => {
    return (
        <div className={styles.sendMessageBox}>
            <textarea className={styles.inputBox} placeholder={'Введите сообщение...'} maxLength={255}/>
            <button className={styles.sendButton} onClick={() => sendMessage()}>Отправить</button>
        </div>
    );
};

let messagesElements = messages.map(m => <Message id={m.id} mText={m.messageText} contentType={m.contentType}/>)

const Messages = (props) => {
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