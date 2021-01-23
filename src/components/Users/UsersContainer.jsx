import React from 'react'
import { connect } from 'react-redux'
import {unFollow, follow, setPages, setTotalUsersCount, setUsers, togleIsFetching, togleIsFollowing } from '../../redux/users_reduser'
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../Bin/preloader';
import { UserAPI } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.togleIsFetching(true);
        UserAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
        this.props.togleIsFetching(false);
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)

        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setPages(pageNumber)
        this.props.togleIsFetching(true);
        UserAPI.getUsers(pageNumber, this.props.pageSize)
        .then(data => {
        this.props.togleIsFetching(false);    
        this.props.setUsers(data.items)
        });
    }

    render() {

        return <>
        {this.props.isFetching ? <Preloader />: null }
        <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            userss={this.props.userss}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            togleIsFollowing={this.props.togleIsFollowing}
            followingInProgress={this.props.followingInProgress}
        /></>
    }
}


let mapStateToProps = (state) => {
    return {
        userss: state.UsersPage.userss,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
        
    }
}

export default connect (mapStateToProps,  { follow, unFollow, setUsers, setPages, setTotalUsersCount, togleIsFetching, togleIsFollowing })
(UsersContainer);