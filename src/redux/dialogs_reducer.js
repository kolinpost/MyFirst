const UPDATE_NEW_BODY = 'UPDATE-NEW-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

    dialogss: [
        { id: 1, name: 'Nikolay' },
        { id: 2, name: 'Olya' },
        { id: 3, name: 'Samaana' },
        { id: 4, name: 'Stas' },
        { id: 5, name: 'Liliya' },
        { id: 6, name: 'Valya' },
        { id: 7, name: 'Papaz' },
    ],

    messagess: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'YO' },
        { id: 4, message: 'Oy' },
        { id: 5, message: 'YAA' },
        { id: 6, message: 'Hey' },
        { id: 7, message: 'Hahaha' }
    ],

    imagess: [
        { id: 1, img: 'https://images.unsplash.com/photo-1603139439523-f8c95a33c548?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
        { id: 2, img: 'https://images.unsplash.com/photo-1603139439523-f8c95a33c548?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
        { id: 3, img: 'https://images.unsplash.com/photo-1603139439523-f8c95a33c548?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
        { id: 4, img: 'https://images.unsplash.com/photo-1603139439523-f8c95a33c548?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
        { id: 5, img: 'https://images.unsplash.com/photo-1603139439523-f8c95a33c548?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
        { id: 6, img: 'https://images.unsplash.com/photo-1603139439523-f8c95a33c548?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' },
        { id: 7, img: 'https://images.unsplash.com/photo-1603139439523-f8c95a33c548?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' }

    ],

    newMessageBody: 'Hell!'

}


const dialogsReduder = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_BODY:{
            return {...
                state,
                newMessageBody: action.body
            };
            
            
        }
        case SEND_MESSAGE:{
            let body = state.newMessageBody;
            return {...
                state, 
                newMessageBody: '', 
                messagess: [...state.messagess, { id: 8, message: body }]
            };
            
        }
        default: return state;
    }
}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE });
export const UpdateNewMessageBodyCreater = (body) => ({ type: UPDATE_NEW_BODY, body: body });

export default dialogsReduder;