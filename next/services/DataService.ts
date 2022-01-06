import About from '../interfaces/About';
import Global from '../interfaces/Global';
import Hero from '../interfaces/Hero';
import Project from '../interfaces/Project';
import GetProjectParams from '../interfaces/strapi/requests/GetProjectParams';
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

  async getProjects(params?: GetProjectParams): Promise<Project[]> {
    const { data } = await this.axios.get<Project[]>(
      '/projects?_sort=order:ASC',
      { params }
    );

    return data;
  }

  async getGlobal(): Promise<Global> {
    const { data } = await this.axios.get<Global>('/global');

    return data;
  }
}
