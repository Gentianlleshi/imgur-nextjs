import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAlbum } from "./api/imgur";
import { GalleryAlbum, GalleryImage } from "./store/types";
import { Modal } from "@/components/Modal";
import { Item } from "@/components/Item";
import Link from "next/link";
import logo from "../assets/img/imgur.png";

const Album: NextPage = () => {
  const router = useRouter();
  const { albumId } = router.query;
  // console.log(albumId);
  const [currentItem, setCurrentItem] = useState<GalleryImage | undefined>(
    undefined
  );
  const [album, setAlbum] = useState<GalleryAlbum>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // console.log(album);
  const fetchAlbum = async () => {
    if (!albumId) return;
    setIsLoading(true);

    getAlbum(albumId).then((data) => {
      setAlbum(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchAlbum();
  }, [albumId]);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }

  return (
    <div className="single-album">
      {album && (
        <div>
          <div className="logo">
            <Link href="/">
              <img src={logo.src} alt="" />
            </Link>
            <h2>{album.title}</h2>
          </div>
          <div key={album.id} className="gallery-wrapper">
            {currentItem && (
              <Modal
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
              />
            )}
            {album.images &&
              album.images.length > 0 &&
              album.images.map((image) => (
                <div key={image.id} className="galerry-card">
                  <Item item={image} setCurrentItem={setCurrentItem} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Album;
