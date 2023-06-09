import { connect } from "react-redux";
import {
  fetchingChanged,
  followingChanged,
  getUsers,
  follow,
  unfollow,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.getUsers(page, this.props.pageSize);
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

export default compose(
  connect(mapStateToProps, {
    fetchingChanged,
    followingChanged,
    getUsers,
    follow,
    unfollow,
  }),
  withAuthRedirect
)(UsersContainer);

// [_site_admin_email] <dmonogarov@gmail.com>
