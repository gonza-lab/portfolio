import axios from 'axios';

const send = async (body, dispatch) => {
  const { data } = await axios.post('api/mail', body);
  return data;
};

export default { send };
