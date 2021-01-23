import React from 'react';
import style from './DialogItem/DialogItem.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './MessageItem/MessageItem';
import { sendMessageCreater, UpdateNewMessageBodyCreater } from '../../redux/dialogs_reducer';


const Dialogs = (props) => {

    let state = props.DialogPage;

    let dialogsElements = state.dialogss
    .map( dialogss => <DialogItem name={dialogss.name} id={dialogss.id} />);

    let messagesElements = state.messagess 
    .map( messagess => <Message message={messagess.message} />);
    
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () =>{
        props.sendMessage()
    }

    let onChangeNewMessage = (e) =>{
        let body = e.target.value;
        props.UpdateNewMessageBody(body)
    }

    return (
        <div className={style.dialogs}>
             <div className={style.dialogsElem}>
                 {dialogsElements}
            </div>
            <div className={style.messagesElem}>
                {messagesElements}
                <div>
                    <div><textarea value={newMessageBody} onChange={onChangeNewMessage} placeholder='Enter Your Message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;