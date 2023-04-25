import { getGallery } from "@/pages/api/imgur";
import { useEffect, useState } from "react";
import { GalleryAlbum, GalleryImage } from "../store/types";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Modal } from "./Modal";
import { Item } from "./Item";
export default function Gallery() {
  const filter = useSelector((state: RootState) => state.filters);

  const [currentItem, setCurrentItem] = useState<GalleryImage | undefined>(
    undefined
  );
  const [gallery, setGallery] = useState<GalleryAlbum[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchGallery = async () => {
    setIsLoading(true);

    getGallery(filter).then((data) => {
      setGallery(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchGallery();
  }, [filter]);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }

  return (
    <div className="gallery-wrapper">
      {currentItem && (
        <Modal currentItem={currentItem} setCurrentItem={setCurrentItem} />
      )}

      {gallery.map((item) => (
        <div key={item.id} className="galerry-card">
          {/* nsq !is_album bej popup me link */}

          <Item item={item} setCurrentItem={setCurrentItem} />
        </div>
      ))}
    </div>
  );
}
