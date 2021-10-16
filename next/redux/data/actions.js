import axios from 'axios';
import types from '../types';
import ui from '../ui/actions';

export const readData = (payload) => ({
  type: types.dataRead,
  payload,
});

const startRead = () => {
  return async (dispatch) => {
    dispatch(ui.toggleGetData());

    const { data } = await axios.get('/api/data');

    dispatch(readData(data));

    dispatch(ui.toggleGetData());
  };
};

export default { startRead };
