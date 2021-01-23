const UPDATE_NEW_BODY = 'UPDATE-NEW-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const newsReducer = (state, action) => {
    if (action.type === UPDATE_NEW_BODY) {
        this._state.DialogPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
    }
    else if (action.type === SEND_MESSAGE) {
        let body = this._state.DialogPage.newMessageBody;
        this._state.DialogPage.newMessageBody = '';
        this._state.DialogPage.messagess.push({ id: 8, message: body });
        this._callSubscriber(this._state);
    }

    return state
}