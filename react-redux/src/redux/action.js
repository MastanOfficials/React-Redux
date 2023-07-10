//GetData,updatefile,delete,create,
import axios from "axios";

export const GETDATA_API_REQUEST = "GETDATA_API_REQUEST";
export const CREATE_DATA_USER = "CREATE_DATA_USER";
export const UPDATE_DATA_USER = "UPDATAE_DATA_USER";
export const DELETE_USER_DATA = "DELETE_USER_DATA";

const APP_BASE_URL = "https://jsonplaceholder.typicode.com";

export const getdataApi = () => {
  return (dispatch) => {
    return axios.get(`${APP_BASE_URL}/posts`).then((response) => {
      dispatch({
        type: GETDATA_API_REQUEST,
        payload: response.data,
      });
    });
  };
};

export const createUser = (item) => {
  return (dispatch) => {
    return axios.post(`${APP_BASE_URL}/posts`, item).then((response) => {
      dispatch({
        type: CREATE_DATA_USER,
        payload: response.data,
      });
    });
  };
};
export const updateUser = (itemId, upDateData) => {
  return (dispatch) => {
    return axios
      .put(`${APP_BASE_URL}/posts/${itemId}`, upDateData)
      .then((response) => {
        dispatch({
          type: UPDATE_DATA_USER,
          payload: response.data,
        });
      });
  };
};

export const deleteUser = (ItemId) => {
  return (dispatch) => {
    return axios.delete(`${APP_BASE_URL}/posts/${ItemId}`).then(() => {
      dispatch({
        type: DELETE_USER_DATA,
        payload: ItemId,
      });
    });
  };
};
