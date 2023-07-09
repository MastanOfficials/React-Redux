import {
  CREATE_DATA_USER,
  DELETE_USER_DATA,
  GETDATA_API_REQUEST,
  UPDATE_DATA_USER,
} from "./action";

const initialState = {
  data: [],
};

export const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GETDATA_API_REQUEST:
      return {
        ...state,
        data: payload,
      };
    case CREATE_DATA_USER:
      return {
        ...state,
        data: [...state.data, payload],
      };
    case UPDATE_DATA_USER:
      return {
        ...state,
        data: state.data.map((items) =>
          items.id === payload.id ? payload : items
        ),
      };
    case DELETE_USER_DATA:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};
