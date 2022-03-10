import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userActionTypes";
import axios from "axios";

export const fetchUsersRequest = (users) => {
  return {
    type: FETCH_USERS_REQUEST,
    payload: users,
  };
};

export const fetchUsersSuccess = (errorMsg) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: errorMsg,
  };
};

export const fetchUsersFailure = () => {
  return {
    type: FETCH_USERS_FAILURE,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
