export interface Images {
  id: string;
  type: string;
  link: string;
  length: number;
}

export interface Item {
  id: string;
  title: string;
  images: Images[];
  video: { link: string; type: string }[];
  description: string;
}

export interface Props {
  data?: Item[];
}
