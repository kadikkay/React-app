import { connect } from "react-redux";
import {
  fetchingChanged,
  follow,
  unfollow,
  followingChanged,
  getUsersThunkCreator
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (page) => {
    this.props.getUsersThunkCreator(page, this.props.pageSize)
    // this.props.setPage(page);
    // this.props.fetchingChanged(true);
    // getUsers(page, this.props.pageSize).then((data) => {
    //     this.props.setUsers(data.items);
    //     this.props.fetchingChanged(false);
    //   });
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
            followingChanged={this.props.followingChanged}
            followingIsProgress={this.props.followingIsProgress}
          />
        )}
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
    isFetching: state.usersPage.isFetching,
    followingIsProgress: state.usersPage.followingIsProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  fetchingChanged,
  followingChanged,
  getUsersThunkCreator,
})(UsersContainer);
