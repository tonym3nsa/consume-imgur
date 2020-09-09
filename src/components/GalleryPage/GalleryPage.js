import React, { useEffect, useState } from "react";
import ThumbnailCard from "../ThumbnailCard/ThumbnailCard";
import Carousel from "../Carousel/Carousel";
import ModalDialog from "../ModalDialog/ModalDialog";
import { useSelector } from "react-redux";
import "./GalleryPage.css";

function GalleryPage() {
  const { galleryItems } = useSelector((state) => state.galleryReducer);
  const { galleryStatus } = useSelector((state) => state.galleryReducer);
  const [displayDetails, setDisplayDetails] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState(null);
  const [paginatedList, setPaginatedList] = useState([]);
  const [lastPage, setLastPage] = useState(null);
  const pageSize = 10;

  useEffect(() => {
    if (galleryItems) {
      paginateList();
    }
  }, [galleryItems]);

  useEffect(() => {
    if (galleryItems) {
      updatePageContent();
    }
  }, [currentPage]);

  function updatePageContent() {
    const pages = paginate(galleryItems, pageSize);
    const clone = paginatedList;

    const update = clone.concat(pages);
    setPaginatedList(update);
  }

  function paginateList() {
    let finalPage = galleryItems.length / pageSize;
    if (finalPage % 2 > 0) {
      finalPage = finalPage + 1;
    }
    setLastPage(finalPage);
    createList();
  }

  function displayModal(image) {
    setImages(image);
    setSelectedTitle(image.title);
    setDisplayDetails(true);
  }

  function createList() {
    const pages = paginate(galleryItems, pageSize);
    setPaginatedList(pages);
  }

  function nextPage() {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  }

  function paginate(array, page_size) {
    return array.slice((currentPage - 1) * page_size, currentPage * page_size);
  }

  function onScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      nextPage();
    }
  }

  const loadingState = (
    <React.Fragment>
      <h1 style={{ color: "#ffffff" }}>Loading...</h1>
    </React.Fragment>
  );

  return (
    <div
      onScroll={currentPage <= lastPage ? onScroll : null}
      className="gallery"
      style={{ overflowY: "scroll", height: "100vh" }}
    >
      <ModalDialog
        display={displayDetails}
        close={() => setDisplayDetails(false)}
        content={<Carousel images={images ? images.images : null} />}
        title={selectedTitle}
      />

      <div className="container-fluid">
        {galleryStatus === true ? (
          loadingState
        ) : (
          <div className="card-columns">
            {paginatedList && paginatedList.length > 0
              ? paginatedList.map((item, i) => (
                  <div key={i}>
                    <div
                      className="card"
                      key={i}
                      onClick={() => displayModal(item)}
                    >
                      <ThumbnailCard
                        title={item.title}
                        type={item.type}
                        animated={item.animated}
                        image={item.images}
                        link={item.link}
                      />
                    </div>
                  </div>
                ))
              : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default GalleryPage;
