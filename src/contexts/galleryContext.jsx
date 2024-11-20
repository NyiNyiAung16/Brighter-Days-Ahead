import { createContext, useEffect, useState } from "react";
import { getPhotos } from "../helpers/gallery";

const GalleryContext = createContext();

const GalleryProvider = ({ children }) => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      let data = await getPhotos();
      setGallery(data);
      setIsLoading(false);
    };
    fetch();
  }, []);

  const value = {
    gallery,
    isLoading,
    setGallery,
  };

  return (
    <GalleryContext.Provider value={value}>{children}</GalleryContext.Provider>
  );
};

export { GalleryContext, GalleryProvider };
