import About from '../interfaces/About';
import Global from '../interfaces/Global';
import Hero from '../interfaces/Hero';
import Project from '../interfaces/Project';
import ApiService from './ApiService';

export default class DataService extends ApiService {
  constructor() {
    super();
  }

  async getHero(): Promise<Hero> {
    const { data } = await this.axios.get<Hero>('/hero');

    return data;
  }

  async getAbout(): Promise<About> {
    const { data } = await this.axios.get<About>('/about');

    return data;
  }

  async getProjects(): Promise<Project[]> {
    const { data } = await this.axios.get<Project[]>('/projects');

    return data;
  }

  async getGlobal(): Promise<Global> {
    const { data } = await this.axios.get<Global>('/global');

    return data;
  }
}
