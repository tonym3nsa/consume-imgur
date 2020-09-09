import React from "react";

function Preview(props) {
  function handleIsActive(i) {
    props.handleIsActive(i);
  }
  return (
    <div className="preview-section">
      <div className="row">
        <div className="col-md-12">
          <ul className="preview">
            {props.images && props.images.length > 1
              ? props.images.map((item, i) => (
                  <li
                    className={props.isActive === i ? "active" : ""}
                    onClick={() => handleIsActive(i)}
                    key={i}
                  >
                    <span style={{ background: `url(${item.link})` }}></span>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Preview;
