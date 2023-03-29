import {createContext, useContext, useState} from "react";
import {projects} from "./portfolio";

const galleryContext = createContext();


export function ProvideGallery({ children }) {
  const gallery = useProvideGallery();
  return <galleryContext.Provider value={gallery}>{children}</galleryContext.Provider>;
}

export const useGallery = () => {
  return useContext(galleryContext);
};

export const useProvideGallery = () => {
  const [selectedProject, setSelectedProject] = useState(projects[2])
  const [galleryActive, setGalleryActive] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)



  const openGallery = (project) => {
    setGalleryActive(true)
    setActiveImageIndex(0)
    setSelectedProject(project)
  }

  return {selectedProject, setSelectedProject, galleryActive, setGalleryActive, activeImageIndex, setActiveImageIndex, openGallery}
}