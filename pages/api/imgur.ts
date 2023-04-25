import axios from "axios";
import { GalleryAlbum } from "../../store/types";

// Create a type for the filter
export type GalleryFilter = {
  section: string;
  sort: string;
  window: string;
  page?: number;
  showViral?: boolean;
};
// Fetch galleries from the Imgur API
export async function getGallery(
  filter: GalleryFilter
): Promise<GalleryAlbum[]> {
  const { section, sort, window, page = 1, showViral = false } = filter;

  // use axios to fetch galleries from the Imgur API
  const { data } = await axios.get(
    `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`,
      },
    }
  );
  return data.data;
}
// use axios to fetch single gallery from the Imgur API
export async function getAlbum(
  albumId: string | string[] | undefined
): Promise<GalleryAlbum> {
  const { data } = await axios.get(
    `https://api.imgur.com/3/gallery/album/${albumId}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`,
      },
    }
  );
  return data.data;
}
