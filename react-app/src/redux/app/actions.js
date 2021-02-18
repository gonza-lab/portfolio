import axios from 'axios';
import types from '../types';
import ui from '../ui/actions';

const read = (payload) => ({
  type: types.appRead,
  payload,
});

const startRead = () => {
  return async (dispatch) => {
    dispatch(ui.toggleGetApps());

    const { data } = await axios.get('/api/app');

    dispatch(read(data));

    dispatch(ui.toggleGetApps());
  };
};

export default { startRead };
