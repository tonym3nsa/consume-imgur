import React, { useEffect, useState } from "react";
import Preview from "../Preview/Preview";
import "./Carousel.css";

export function SelectMediaType({ type, url, id }) {
  switch (type) {
    case "image/png":
      return <ImageCard id={id} url={url} />;
    case "image/jpeg":
      return <ImageCard id={id} url={url} />;
    case "image/gif":
      return <ImageCard id={id} url={url} />;
    case "video/mp4":
      return <VideoCard type={type} url={url} />;
    default:
      return <span>Nothing to display amigo :(</span>;
  }
}

export function ImageCard({ url, id }) {
  return (
    <span data-testid="imageCardCarousel">
      <img src={url} style={{ width: "100%" }} alt={id} />
    </span>
  );
}

export function VideoCard({ url, type }) {
  return (
    <span data-testid="videoCardCarousel">
      <video controls width="100%">
        <source src={url} type={type} />
      </video>
    </span>
  );
}

function Carousel(props) {
  useEffect(() => {}, []);
  const [isActive, setIsActive] = useState(0);

  function handleIsActive(e) {
    setIsActive(e);
  }

  useEffect(() => {}, [isActive]);
  return (
    <div>
      {props.images ? (
        props.images.map((item, i) => (
          <div key={i}>
            <div className="row">
              <div className="col-md-8">
                <div className={isActive === i ? "" : "hidden"}>
                  <SelectMediaType
                    url={item.link}
                    type={item.type}
                    id={item.id}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={isActive === i ? "" : "hidden"}
                  style={{
                    margin: "0 auto",
                  }}
                >
                  {item.description ? (
                    <div>
                      <p>{item.description}</p>
                    </div>
                  ) : null}
                  <ul className="stats">
                    <li>
                      <h4>Upvote: {props.ups ? `${props.ups}` : "0"}</h4>
                    </li>
                    <li>
                      <h4>Downvote: {props.downs ? `${props.downs}` : "0"}</h4>
                    </li>
                    <li>
                      <h4>Scores: {props.score ? `${props.score}` : "0"}</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <React.Fragment>
          <h1>Nothing to display</h1>
        </React.Fragment>
      )}
      {props.images && props.images.length > 1 ? (
        <Preview
          handleIsActive={handleIsActive}
          images={props.images}
          isActive={isActive}
        />
      ) : null}
    </div>
  );
}

export default Carousel;
