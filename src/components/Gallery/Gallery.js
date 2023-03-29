import './Gallery.css'
import React from 'react';
import {useGallery} from "../../useGallery";
import uniqid from "uniqid";

export const Gallery = () => {
  const {
    selectedProject,
    galleryActive,
    setGalleryActive,
    activeImageIndex,
    setActiveImageIndex
  } = useGallery()



  const nextImage = () => {
    if (selectedProject.images.length === (activeImageIndex+1)){
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(activeImageIndex+1);
    }
  }
  const prevImage = () => {
    if (0 === activeImageIndex){
      setActiveImageIndex(selectedProject.images.length-1);
    } else {
      setActiveImageIndex(activeImageIndex-1);
    }
  }

  return (<>
        {galleryActive && selectedProject.images && <div id="myModal" className="modal">

          <span role="button" className="close cursor" onClick={()=>setGalleryActive(false)}>&times;</span>
          <div className="modal-content">

            <div className="mySlides" style={{display: "block"}}>
              <div className="numbertext">{activeImageIndex+1} / {selectedProject.images.length}</div>
              <img
                  src={selectedProject.images[activeImageIndex]}
                  style={{width: "100%"}} alt={`Screenshot ${activeImageIndex+1}`}/>
            </div>


            {/* Next/previous controls */}
            <a className="prev" onClick={prevImage}>&#10094;</a>
            <a className="next" onClick={nextImage}>&#10095;</a>


            {/* Thumbnail image controls */}
            {selectedProject.images.map((value, index, array)=>{
              return(<div key={uniqid()}  className="column" style={{width: Math.min(100/array.length, 33)+"%"}}>
                <img className=" demo active " src={value} onClick={() => setActiveImageIndex(index)} />
              </div>)
            })}

          </div>
        </div>}

      </>

  )
}