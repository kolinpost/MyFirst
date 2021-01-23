const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE ='SET-USERS-PROFILE';

let initialState = {
    PostDate: [
        { id: 1, likesCount: '1', message: 'Hi, whats going on???' },
        { id: 2, likesCount: '143', message: 'Hi, im dont know' },
        { id: 3, likesCount: '19', message: 'Fuck you!' },
        { id: 4, likesCount: '9465', message: 'YO' },

    ],

    newPostText: 'Hi! Hello! Welcome!',
    profile: null

}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
            ...state, 
            profile: action.profile
            
            }
        };
        
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return { ...state,
                PostDate: [...state.PostDate, newPost],
                newPostText : ''

            };
        }
        case UPDATE_NEW_POST: {
            return {...state,
                newPostText: action.newText
            };

        }
        default:
            return state;
    }}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostActionCreater = () => ({ type: ADD_POST });
export const UpdateNewPostActionCreater = (text) => ({ type: UPDATE_NEW_POST, newText: text });

export default profileReducer;