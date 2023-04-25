import { GalleryImage, GalleryAlbum } from "@/store/types";
import { SetStateAction } from "react";
import Video from "./Video";
import Image from "./Image";
import Link from "next/link";
import galleryIcon from "../assets/img/gallery-icon.png";

export default function setModalData({
  item,
  is_album,
  setCurrentItem,
}: {
  item: GalleryAlbum | GalleryImage;
  is_album: boolean;
  setCurrentItem: (value: SetStateAction<GalleryImage | undefined>) => void;
}) {
  let image;
  if (is_album) {
    let galleryItem = item as GalleryAlbum;

    // if it's an album the attributes (ups/downs/score) are on the item itself, so we pull those into the first image
    image = galleryItem.images[0];
    image.ups = item.ups;
    image.downs = item.downs;
    image.score = item.score;
    image.title = item.title;
    image.description = item.description ?? image.description;
  } else {
    image = item as GalleryImage;
  }

  setCurrentItem(image);
}

export function Item({
  item,
  setCurrentItem,
}: {
  item: GalleryAlbum | GalleryImage;
  setCurrentItem: (value: SetStateAction<GalleryImage | undefined>) => void;
}) {
  let is_album = item.is_album;

  const galleryItem = item as GalleryAlbum; // need to force it to GalleryItem type so that we can get it's images if it's an album

  const image = is_album ? galleryItem.images[0] : (item as GalleryImage);

  if (!image) {
    return <></>;
  }

  const type = image.type === "video/mp4" ? "video" : "image";

  return (
    <>
      {is_album && galleryItem.images.length > 1 && (
        <Link href="/[albumId]" as={`/${galleryItem.id}`}>
          <div className="album-label">
            <img src={galleryIcon.src} width={20} height={20}></img>{" "}
            <span>{galleryItem.images.length}</span>
          </div>
        </Link>
      )}
      <div
        className="thumbnail"
        onClick={() => setModalData({ item, is_album, setCurrentItem })}
      >
        {type === "video" && <Video item={image} />}

        {type === "image" && <Image item={image} />}
        <div className="description">
          {is_album ? <div>{item.title}</div> : <div>{image.title}</div>}
        </div>
      </div>
      {/* {is_album && <Link href="/[albumId]" as={`/${galleryItem.id}`}></Link>} */}
    </>
  );
}
