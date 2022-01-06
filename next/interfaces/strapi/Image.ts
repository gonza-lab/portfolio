interface ImageData {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path?: any;
  url: string;
}

interface Formats {
  thumbnail: ImageData;
  large: ImageData;
  medium: ImageData;
  small: ImageData;
}

export default interface Image {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: object;
  related?: string;
  created_at: Date;
  updated_at: Date;
}
