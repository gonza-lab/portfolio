import types from '../types';

const initialState = {
  list: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.appRead:
      return { ...state, list: [...payload] };

    default:
      return state;
  }
};
