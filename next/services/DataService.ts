import App from '../interfaces/app';
import Data from '../interfaces/data';
import Hero from '../interfaces/Hero';
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

  async getHero() {
    const { data } = await this.axios.get<Hero>('/hero');

    return data;
  }
}
