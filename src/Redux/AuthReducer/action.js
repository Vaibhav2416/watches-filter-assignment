//Write the ActionCreator functions here
import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const login = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios({
    method: "POST",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  })
    .then((r) => dispatch({ type: LOGIN_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: LOGIN_FAILURE, payload: e }));
};

export { login };

