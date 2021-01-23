import React from 'react';
import style from './users2.module.css';
import userPhotos from './../img/user.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { UserAPI } from '../../api/api';


let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pagesUsers = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesUsers.push(i);
    }


    return <div>
        <div className={style.stranicu}><br />
            <br />
            {pagesUsers.map(p => {
                return <span className={props.currentPage === p && style.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}

            <br />
            <br />
            <br />

        </div>
        {
            props.userss.map(u => <div key={u.id}>
                <div className={style.total}>
                    <span>
                        <NavLink to={'/profile/' + u.id} ><img src={u.photos.small != null ? u.photos.small : userPhotos} className={style.userPhoto} /></NavLink>
                        <div>
                            {u.followed
                                
                                ? <button disabled={props.followingInProgress.some(id=> id == u.id)} onClick={() => {
                                    props.togleIsFollowing(true, u.id)
                                    UserAPI.deleteUser(u.id)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                props.unFollow(u.id);
                                            }
                                            props.togleIsFollowing(false, u.id);
                                        });
                                }}>unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                                    props.togleIsFollowing(true, u.id)
                                   UserAPI.postUser(u.id)
                                   .then(data => {
                                            if (data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                            props.togleIsFollowing(false, u.id)
                                        });
                                }}>follow</button>
                            }</div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.id}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            </div>)
        }
    </div>
}

export default Users