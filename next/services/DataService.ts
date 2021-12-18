import About from '../interfaces/About';
import App from '../interfaces/App';
import Data from '../interfaces/Data';
import Global from '../interfaces/Global';
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

  async getHero(): Promise<Hero> {
    const { data } = await this.axios.get<Hero>('/hero');

    return data;
  }

  async getAbout(): Promise<About> {
    const { data } = await this.axios.get<About>('/about');

    return data;
  }

  async getGlobal(): Promise<Global> {
    const { data } = await this.axios.get<Global>('/global');

    return data;
  }
}
