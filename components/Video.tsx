import { GalleryAlbum, GalleryImage } from "@/store/types";

export default function Video({ item }: { item: GalleryImage }) {
  return (
    <video
      src={item.link}
      width={100}
      height={100}
      // controls
      autoPlay
      loop
      muted
    />
  );
}
