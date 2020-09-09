import React from "react";
import Button from "../Button/Button";
import "./ModalDialog.css";

function ModalDialog(props) {
  function closeModal() {
    props.close();
  }
  return (
    <div>
      {props.display === true ? (
        <span>
          <div className="modal fade show block" tabIndex="-1" role="dialog">
            <div
              className="modal-dialog modal-dialog-scrollable modal-xl"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{props.title}</h5>
                  <Button text="&times;" handleClick={closeModal} />
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">{props.content}</div>
                  </div>
                </div>
                <div className="modal-footer">{props.footer}</div>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fade show block"
            id="backdrop"
            style={{ display: "block" }}
          ></div>
        </span>
      ) : null}
    </div>
  );
}

export default ModalDialog;
