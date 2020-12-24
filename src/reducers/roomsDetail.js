import roomsApi from "../apis/roomsApi";

const FETCH_ROOMS_DETAIL = "FETCH_ROOMS_DETAIL";

export const fetchRoomsDetail = (id) => async (dispatch) => {
  const response = await roomsApi.get(`/${id}`);

  dispatch({
    type: FETCH_ROOMS_DETAIL,
    payload: {
      id,
      data: response.data,
    },
  });
};

const initState = {
  // todo: add pending and error status
  api: {},
};

const roomsDetail = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_ROOMS_DETAIL:
      return {
        ...state,
        [payload.id]: payload.data,
      };
    default:
      return state;
  }
};

export default roomsDetail;
