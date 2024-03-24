import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";
import {
  UserActionTypes,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "@/types/userTypes";
import axios from "axios";

export const fetchUsers =
  (): ThunkAction<void, RootState, null, UserActionTypes> =>
  async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
      //   dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
  };
