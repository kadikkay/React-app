import axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "29392b1b-14cc-49b0-8408-912b188af9ae",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instanse
      .get(
        `users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => response.data);
  },
  follow(userID = 1){
    return instanse
    .post(
      `follow/${userID}`,
    )
  },
  unfollow(userID = 1){
    return instanse
    .delete(
      `follow/${userID}`,
    )  
  },
}

export const profileAPI = {
  getProfile(userId = 2) {
    return instanse
      .get(`profile/` + userId)
      .then((response) => response.data);
  },
  getStatus(userId = 2) {
    return instanse
      .get(`profile/status/` + userId)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instanse
      .put(`profile/status/`, {status}, {} )
  },
}

export const authAPI = {
  getAuth ()  {
    return instanse
      .get(`auth/me`)
      .then((response) => response.data);
  },
  setLoginData (email, password, rememberMe) {
    return instanse
      .post(`auth/login`, {email, password, rememberMe});
  },
  setLogOutData () {
    return instanse
      .delete(`auth/login`);
  }
}
