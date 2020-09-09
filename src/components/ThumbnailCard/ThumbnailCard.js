import React from "react";

import "./ThumbnailCard.css";

export function SelectMediaType({ image }) {
  if (image && image.length > 0) {
    // iterator should be less than 1 to display the first item in the array
    for (let i = 0; i < 1; i++) {
      switch (image[i].type) {
        case "image/png":
          return <ImageCard id={image[i].id} url={image[i].link} />;

        case "image/jpeg":
          return <ImageCard id={image[i].id} url={image[i].link} />;

        case "image/gif":
          return <ImageCard id={image[i].id} url={image[i].link} />;

        case "video/mp4":
          return <VideoCard url={image[i].link} type={image[i].type} />;
        default:
          return <span>Nothing to display amigo :(</span>;
      }
    }
  }
  return null;
}

export function ImageCard({ url, id }) {
  return (
    <span data-testid="imageCard">
      <img src={url} alt={`photo_${id}`} />
    </span>
  );
}

export function VideoCard({ url, type }) {
  return (
    <span data-testid="videoCard">
      <video controls>
        <source src={url} type={type} />
      </video>
    </span>
  );
}

function ThumbnailCard(props) {
  return (
    <div className="thumbnail">
      <div>{<SelectMediaType image={props.image} />}</div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default ThumbnailCard;
