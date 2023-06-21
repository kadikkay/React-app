import { createSelector } from "reselect"

export const getUsersState = (state) => {
    return state.usersPage.users
}
// export const getUserSuper = createSelector(() =>{

// })
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const followingIsProgress = (state) => {
    return state.usersPage.followingIsProgress
}
export const isFetching = (state) => {
    return state.usersPage.isFetching
}