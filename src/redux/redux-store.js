import { combineReducers, createStore } from 'redux';
import authReducer from './auth_reducer';
import dialogsReduder from './dialogs_reducer';
import profileReducer from './profile_reducer';
import usersReducer from './users_reduser';

let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogPage: dialogsReduder,
    UsersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

