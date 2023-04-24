import { GalleryImage } from "@/pages/store/types";
import { SetStateAction } from "react";
import Video from "./Video";
import Image from "./Image";

export function Modal({
  currentItem,
  setCurrentItem,
}: {
  currentItem: GalleryImage;
  setCurrentItem: (value: SetStateAction<GalleryImage | undefined>) => void;
}) {
  if (!currentItem) {
    return <></>;
  }

  const type = currentItem.type === "video/mp4" ? "video" : "image";

  return (
    <div className="popup">
      {/* Current item */}
      <div className="popup-inner">
        <button onClick={() => setCurrentItem(undefined)}>x</button>
        <div className="IVTD">
          {type === "video" && <Video item={currentItem} />}
          {type === "image" && <Image item={currentItem} />}
          <div className="TD">
            <div className="title">{currentItem.title}</div>
            <div className="description">{currentItem.description}</div>
          </div>
        </div>
        <div className="info">
          <span> Ups: {currentItem.ups}</span>
          <span> Downs: {currentItem.downs}</span>
          <span> Score: {currentItem.score}</span>
        </div>
      </div>
    </div>
  );
}
