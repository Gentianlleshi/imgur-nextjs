import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAlbum } from "./api/imgur";
import { GalleryAlbum } from "./store/types";

const Album: NextPage = () => {
  const router = useRouter();
  const { albumId } = router.query;
  console.log(albumId);

  const [album, setAlbum] = useState<GalleryAlbum>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      {album && (
        <div key={album.id}>
          {album.images &&
            album.images.length > 0 &&
            album.images.map((image) => (
              <div key={image.id}>
                {image.type === "image/jpeg" && (
                  <img
                    src={image.link}
                    alt={image?.title}
                    width={100}
                    height={100}
                  />
                )}

                {image.type === "video/mp4" && (
                  <video
                    src={image.link}
                    width={100}
                    height={100}
                    autoPlay
                    muted
                  />
                )}
              </div>
            ))}
          <h2>{album.description}</h2>
        </div>
      )}
    </div>
  );
};

export default Album;
