import { userAPI } from "../api/api";
import {updateObjectInArray} from '../utils/helper/helper'

let initialState = {
  users: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingIsProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
      };
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
      };
    }
    case "SET_USERS": {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case "SET_PAGE": {
      return {
        ...state,
        currentPage: action.page,
        totalCount: action.count,
      };
    }
    case "SET_TOTAL_USERS_COUNT": {
      return {
        ...state,
        totalCount: action.count,
      };
    }
    case "TOGGLE_IS_FETCHING": {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case "TOGGLE_IS_PROGRESS": {
      return {
        ...state,
        followingIsProgress: action.isFetching
          ? [...state.followingIsProgress, action.userId]
          : state.followingIsProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

export const acceptFollow = (userID) => ({ type: "FOLLOW", userID });

export const acceptUnfollow = (userID) => ({ type: "UNFOLLOW", userID });

export const setUsers = (users) => ({ type: "SET_USERS", users });

export const setPage = (page) => ({ type: "SET_PAGE", page });

export const setTotalUsersCount = (count) => ({
  type: "SET_TOTAL_USERS_COUNT",
  count,
});

export const fetchingChanged = (isFetching) => ({
  type: "TOGGLE_IS_FETCHING",
  isFetching,
});
export const followingChanged = (isFetching, userId) => ({
  type: "TOGGLE_IS_PROGRESS",
  isFetching,
  userId,
});

export const getUsers = (page, pageSize) => async (dispatch) => {
  dispatch(fetchingChanged(true));
  dispatch(setPage(page));
  let response = await userAPI.getUsers(page, pageSize);
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
  dispatch(fetchingChanged(false));
};
export const follow = (userID) => async (dispatch) => {
  dispatch(followingChanged(true, userID));
  let response = await userAPI.follow(userID);
  if (response.data.resultCode === 0) {
    dispatch(acceptFollow(userID));
  }
  dispatch(followingChanged(false, userID));
};
export const unfollow = (userID) => async (dispatch) => {
  dispatch(followingChanged(true, userID));
  let response = await userAPI.unfollow(userID);
  if (response.data.resultCode === 0) {
    dispatch(acceptUnfollow(userID));
  }
  dispatch(followingChanged(false, userID));
};

export default usersReducer;
