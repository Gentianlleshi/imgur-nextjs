import { GalleryImage } from "@/store/types";

export default function Image({ item }: { item: GalleryImage }) {
  return <img src={item.link} alt={item?.title} width={100} height={100} />;
}
