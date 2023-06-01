let initialState = {
  users: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return {
              ...u,
              followed: true,
            };
          }
          return u;
        }),
      };
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
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
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: "FOLLOW", userID });

export const unfollowAC = (userID) => ({ type: "UNFOLLOW", userID });

export const setUsersAC = (users) => ({ type: "SET_USERS", users });

export const setPageAC = (page) => ({ type: "SET_PAGE", page });

export const setTotalUsersCountAC = (count) => ({
  type: "SET_TOTAL_USERS_COUNT",
  count,
});

export const fetchingChangedAC = (isFetching) => ({
  type: "TOGGLE_IS_FETCHING",
  isFetching,
});

export default usersReducer;
