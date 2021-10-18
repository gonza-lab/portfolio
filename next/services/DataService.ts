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
}
