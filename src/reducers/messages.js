import roomsApi from "../apis/roomsApi";

const FETCH_ROOM_MESSAGES = "FETCH_ROOM_MESSAGES";
const POST_ROOM_MESSAGES = "POST_ROOM_MESSAGES";

export const fetchRoomMessages = (id) => async (dispatch) => {
  const response = await roomsApi.get(`/${id}/messages`);

  dispatch({
    type: FETCH_ROOM_MESSAGES,
    payload: {
      id,
      data: response.data,
    },
  });
};

export const postMessage = (id, name, message) => async (dispatch) => {
  const response = await roomsApi.post(`/${id}/messages`, {
    name,
    message,
  });
  if (!!response.data.error) {
    return;
  }

  dispatch({
    type: POST_ROOM_MESSAGES,
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

const messages = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_ROOM_MESSAGES:
      return {
        ...state,
        [payload.id]: payload.data,
      };
    case POST_ROOM_MESSAGES:
      return {
        ...state,
        [payload.id]: [...state[payload.id], payload.data],
      };
    default:
      return state;
  }
};

export default messages;
