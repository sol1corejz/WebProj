import React from 'react';
import styles from "./Messages.module.css";

const Message = (props) => {
    return (
        <div className={styles.messageContainer}>
            {props.mText}
        </div>
    );
};

const InputBox = () => {
    return (
        <input className={styles.inputBox} placeholder={'Введите сообщение...'}/>
    );
};

const Messages = (props) => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.messages}>
                <Message mText={'Привет, колян!'}/>
                <Message mText={'Че, как дела?'}/>
            </div>
            <InputBox/>
        </div>

    );
};

export default Messages;