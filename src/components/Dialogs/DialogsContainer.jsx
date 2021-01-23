import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreater, UpdateNewMessageBodyCreater } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        DialogPage: state.DialogPage
    }
}

let dispatchToProps = (dispatch) => {
    return {
        sendMessage: () => { dispatch(sendMessageCreater()) },
        UpdateNewMessageBody: (body) => { dispatch(UpdateNewMessageBodyCreater(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, dispatchToProps)(Dialogs);

export default DialogsContainer;