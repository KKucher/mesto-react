import React from "react";
import { api } from "../utils/api.js";
import Cards from "./Cards.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const promises = [api.getUserInfo(), api.getInitialCards()];

    Promise.all(promises)
      .then((results) => {
        setupUser(results[0]);
        setupCards(results[1]);
      })
      .catch((err) => console.log(`Error ${err}`));

    function setupUser(user) {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
    }

    function setupCards(cards) {
      setCards(
        cards.map((item) => ({
          id: item._id,
          link: item.link,
          name: item.name,
          owner: item.owner,
          likes: item.likes,
        }))
      );
    }
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        />
        <div className="profile__description">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__btn profile__btn_action_edit"
            title="Редактировать профиль"
            onClick={onEditProfile}
          />
          <p className="profile__work">{userDescription}</p>
        </div>
        <button
          className="profile__btn profile__btn_action_add"
          title="Добавить фотографию"
          onClick={onAddPlace}
        />
      </section>

      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cards.map((card) => (
            <Cards
              key={card.id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
