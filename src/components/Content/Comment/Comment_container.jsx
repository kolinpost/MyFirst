import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreater, UpdateNewPostActionCreater } from '../../../redux/profile_reducer';
import Post from './Comment';

let mapStateToProps = (state) => {
    return {
        PostDate: state.ProfilePage.PostDate,
        newPostText: state.ProfilePage.newPostText
    }
}
let dispatchToProps = (dispatch) => {
    return {
        UpdateNewPostText: (text) => {
            let action = UpdateNewPostActionCreater(text);
            dispatch(action)},

        addPost: () => {
            dispatch(addPostActionCreater())
            }
        }
    }
const CommentContainer = connect(mapStateToProps, dispatchToProps)(Post);

export default CommentContainer;