import axios from 'axios';
import ui from '../redux/ui/actions';

const send = async (body, dispatch) => {
  dispatch(ui.toggleSendMail());
  const { data } = await axios.post('api/mail', body);
  dispatch(ui.toggleSendMail());
  return data;
};

export default { send };
