const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGLE_IS_FETCHING = 'TOGLE-IS-FETCHING';
const TOGLE_IS_FOLLOWING = 'TOGLE-IS-FOLLOWING';


let initialState = {

    userss: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                userss: state.userss.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                userss: state.userss.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })

            }

        case SET_USERS: {
            return {
                ...state,
                userss: [...action.userss]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }

        }
        case TOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFetching 
                ?[...state.followingInProgress, action.id]
                :state.followingInProgress.filter(id => id!==action.id)
                
            }
        }

        default: return state;
    }
}



export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (userss) => ({ type: SET_USERS, userss });
export const setPages = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const togleIsFetching = (isFetching) => ({ type: TOGLE_IS_FETCHING, isFetching })
export const togleIsFollowing = (isFetching, id) => ({ type: TOGLE_IS_FOLLOWING, isFetching, id })



export default usersReducer;