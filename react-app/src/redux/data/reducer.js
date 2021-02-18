import types from '../types';
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.dataRead:
      return {
        ...state,
        ...payload.reduce(
          (acum, curr) => ({ ...acum, [curr.ref]: { ...curr } }),
          {}
        ),
      };

    default:
      return state;
  }
};
