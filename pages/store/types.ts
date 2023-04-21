export type GalleryAlbum = {
  map: any;
  id: string;
  title: string;
  description?: string;
  link: string;
  ups: number;
  downs: number;
  score: number;
  views: number;
  is_album: boolean;
  images: GalleryImage[];
};

export interface GalleryImage {
  id: string;
  type: string;
  link: string;
  length: number;
  title: string;
  is_album: boolean;
  description?: string;
  ups: number;
  downs: number;
  score: number;
}

export interface ModalImage {
  link: string;
  title: string;
  description?: string;
  ups: number;
  downs: number;
  score: number;
}
