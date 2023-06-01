import { connect } from "react-redux";
import { fetchingChangedAC, followAC, setPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../preloader/Preloader";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchingChanged(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.fetchingChanged(false);
      });
  }

  onPageChanged = (page) => {
    this.props.setPage(page);
    this.props.fetchingChanged(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.fetchingChanged(false);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            isFetching={this.props.isFetching}
          />
        )}
        {/* <Users
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          isFetching={this.props.isFetching}
        /> */}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID))
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setPage: (page) => {
      dispatch(setPageAC(page))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count));
    },
    fetchingChanged: (isFetching) => {
      dispatch(fetchingChangedAC(isFetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

