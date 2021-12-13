import Image from './strapi/Image';

interface SocialNetwork {
  id: number;
  title: string;
  url: string;
  icon: string;
}

export default interface Global {
  id: number;
  siteName: string;
  contactEmail: string;
  siteLanguage: string;
  created_at: Date;
  updated_at: Date;
  socialNetworks: SocialNetwork[];
  avatar: Image;
}
