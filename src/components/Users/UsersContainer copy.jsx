import React from 'react'
import { connect } from 'react-redux'
import { followAC, setPagesAC, setTotalUsersCountAC, setUsersAC, togleIsFetchingAC, unFollowAC } from '../../redux/users_reduser'
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../Bin/preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.togleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.togleIsFetching(false);
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)

        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setPages(pageNumber)
        this.props.togleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.togleIsFetching(false);    
        this.props.setUsers(response.data.items)
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
        /></>
    }
}


let mapStateToProps = (state) => {
    return {
        userss: state.UsersPage.userss,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching
    }
}

let mapUsersToDispatch = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (userss) => {
            dispatch(setUsersAC(userss))
        },
        setPages: (pageNumber) => {
            dispatch(setPagesAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        togleIsFetching: (isFetching) => {
            dispatch(togleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapUsersToDispatch)(UsersContainer);