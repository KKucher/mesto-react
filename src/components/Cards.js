import React from "react";

function Cards({ link, name, likes, onCardClick }) {
  function handleClick() {
    onCardClick({ link: link, name: name });
  }

  return (
    <li className="photo-grid__card">
      <img
        src={link}
        alt={name}
        className="photo-grid__image"
        onClick={handleClick}
      />
      <div className="photo-grid__description">
        <h2 className="photo-grid__title">{name}</h2>
        <div className="photo-grid__btn_action_likes">
          <button
            className="photo-grid__btn photo-grid__btn_action_like"
            type="button"
            title="Поставить лайк"
          ></button>
          <p className="photo-grid__like-amount">{likes.length}</p>
        </div>
      </div>
      <button
        className="photo-grid__btn photo-grid__btn_action_del"
        type="button"
        title="Удалить"
      ></button>
    </li>
  );
}

export default Cards;
