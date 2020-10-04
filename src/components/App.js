import React from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      link: card.link,
      title: card.name,
    });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      {/* Profile popup */}
      <PopupWithForm
        name={"edit"}
        title={"Редактировать профиль"}
        buttonTitle={"Сохранить"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="name"
          type="text"
          placeholder="Имя"
          maxLength="40"
          minLength="2"
          className="popup__input popup__input_type_name"
          id="name"
          required
        />
        <span id="name-error"></span>
        <input
          name="description"
          type="text"
          placeholder="Занятие"
          autoComplete="off"
          maxLength="200"
          minLength="2"
          className="popup__input popup__input_type_info"
          id="info"
          required
        />
        <span id="info-error"></span>
      </PopupWithForm>
      {/* *********END********* */}

      {/* Add Img popup */}
      <PopupWithForm
        name={"add"}
        title={"Новое место"}
        buttonTitle={"Сохранить"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="name"
          type="text"
          placeholder="Название"
          maxLength="30"
          minLength="2"
          className="popup__input popup__input_type_name popup__input_type_title"
          id="title"
          required
        />
        <span id="title-error"></span>
        <input
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          autoComplete="off"
          className="popup__input popup__input_type_info popup__input_type_link"
          id="link"
          required
        />
        <span id="link-error"></span>
      </PopupWithForm>
      {/* *********END********* */}

      {/* Update avatar popup */}
      <PopupWithForm
        name={"avatar"}
        title={"Обновить аватар"}
        buttonTitle={"Сохранить"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          autoComplete="off"
          className="popup__input popup__input_type_info popup__input_type_link"
          id="link-input"
          required
        />
        <span id="link-input-error"></span>
      </PopupWithForm>
      {/* *********END********* */}

      {/* Img confirm popup */}
      <PopupWithForm
        name={"confirm"}
        title={"Вы уверены?"}
        buttonTitle={"Да"}
        onClose={closeAllPopups}
      ></PopupWithForm>
      {/* *********END********* */}

      {/* Img wiev popup */}
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      {/* *********END********* */}
    </div>
  );
}

export default App;
