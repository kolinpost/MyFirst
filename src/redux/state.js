import dialogsReduder from "./dialogs_reducer";
import profileReducer from "./profile_reducer";



let store = {
  _state: {

    ProfilePage: {

      PostDate: [
        { id: 1, likesCount: '1', message: 'Hi, whats going on??' },
        { id: 2, likesCount: '143', message: 'Hi, im dont know' },
        { id: 3, likesCount: '19', message: 'Fuck you!' },
        { id: 4, likesCount: '9465', message: 'YO' },

      ],

      newPostText: 'TextforTest'

    },



    DialogPage: {

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
  },
  _callSubscriber() {
    console.log('state changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._state.DialogPage = dialogsReduder(this._state.DialogPage, action);


    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;






