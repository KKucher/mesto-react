import React from "react";

function ImagePopup({ link, title, isOpen, onClose }) {
  return (
    <div
      className={`popup popup_content_image ${isOpen && "popup_opened"}`}
      id="popup-image"
    >
      <div className="popup__image-box">
        <button
          type="button"
          class="popup__btn_action_close"
          title="Закрыть форму без сохранения данных"
          onClick={onClose}
        ></button>
        <img src={link} alt={title} className="popup__image" />
        <h2 className="popup__image-caption">{title}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
