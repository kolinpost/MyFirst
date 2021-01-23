import React from 'react';
import Post1Container from './Comment/Comment_container';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {


    return (
        <div>
            <ProfileInfo  profile={props.profile}/>
            <br></br>
            <Post1Container />
        </div>

    ) 
}

export default Profile;