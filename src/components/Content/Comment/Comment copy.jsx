import React from 'react';
import style from './Comment.module.css';
import Post2 from './Post2/Post2';




const Post = (props) => {
   
    let PostElement = props.ProfilePage.PostDate
        .map(PostDate => <Post2 message={PostDate.message} likesCount={PostDate.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let PostChange = () => {
        let text = newPostElement.current.value;
        props.UpdateNewPostText(text)
    }


    return (
        <div><h3>My Posts</h3>
            <div className={style.item}>
                <div>
                    <textarea onChange={PostChange} ref={newPostElement} value={props.ProfilePage.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add</button>
                    <button>Remove</button>
                </div>

                <div className='style.item'>
                    <br></br>
                    {PostElement}
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default Post;