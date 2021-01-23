import React from 'react';
import Preloader from '../../Bin/preloader';
import style from'../Profile.module.css';





const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    
    return (
        <div>
            <div>
                <div className={style.biggerFont}>{props.profile.fullName}</div>
                <img className={style.photos} src={props.profile.photos.large} />
                <div className={style.aboutMe}>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.youtube}</div>
                <div></div> 
                </div>
                <div className={style.vasilev}>Made in vvVasileVvv</div>
                
            </div>
        </div>

    )
}

export default ProfileInfo;