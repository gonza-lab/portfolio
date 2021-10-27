import App from '../interfaces/app';
import Data from '../interfaces/data';
import ApiService from './ApiService';

export default class DataService extends ApiService {
  constructor() {
    super();
  }

  async getAllData() {
    const { data } = await this.axios.get<Data>('/data');
    return data;
  }

  async getAllApps() {
    const { data } = await this.axios.get<App[]>('/app');
    return data;
  }
}
