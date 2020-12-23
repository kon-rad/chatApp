import axios from "axios";

const FETCH_ROOMS = "FETCH_ROOMS";

export const fetchRooms = () => async dispatch => {
  const response = await roomsApi.get();

  dispatch({
    type: FETCH_ROOMS,
    payload: response.data
  })
};

const initState = {
  api: {},
  data: [],
};

const rooms = (state = initState, { type, payload }) => {
  switch (type) {
    case:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default rooms;
