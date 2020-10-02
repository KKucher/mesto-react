import React from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (

<div className="page">

  {/* Header */}
  <Header />

  {/* Main content */}
  <main className="content">
    <section className="profile">
      <div className="profile__avatar" />
      <div className="profile__description">
        <h1 className="profile__name" />
        <button
          type="button"
          className="profile__btn profile__btn_action_edit"
          title="Редактировать профиль"
        />
        <p className="profile__work" />
      </div>
      <button
        className="profile__btn profile__btn_action_add"
        title="Добавить фотографию"
      />
    </section>
    <section className="photo-grid">
      <ul className="photo-grid__list"></ul>
    </section>
  </main>

  {/* Footer */}
  <Footer />

  {/* Profile popup */}
  <div className="popup popup_content_profile">
    <div className="popup__container">
      <button
        type="button"
        className="popup__btn_action_close"
        title="Закрыть форму без сохранения данных"
      />
      <h3 className="popup__heading">Редактировать профиль</h3>
      <form
        className="popup__form popup-edit__form"
        name="editProfileForm"
        noValidate
      >
        <label className="popup__form_label">
          <input
            type="text"
            id="name"
            name="name"
            className="popup__input popup__input_type_name"
            placeholder="Имя"
            maxLength={40}
            minLength={2}
            autoComplete="off"
            required
          />
          <span id="name-error" />
        </label>
        <label className="popup__form_label">
          <input
            type="text"
            id="info"
            name="description"
            className="popup__input popup__input_type_info"
            placeholder="Занятие"
            maxLength={200}
            minLength={2}
            autoComplete="off"
            required
          />
          <span id="info-error" />
        </label>
        <button type="submit" value="Сохранить" className="popup__btn" disabled>
          Сохранить
        </button>
      </form>
    </div>
  </div>

  {/* Add Img popup */}
  <div className="popup popup_content_card">
    <div className="popup__container">
      <button
        type="button"
        className="popup__btn_action_close"
        title="Закрыть форму без сохранения данных"
      ></button>
      <h3 className="popup__heading">Новое место</h3>
      <form
        className="popup__form popup-add__form"
        name="newCardForm"
        noValidate
      >
        <label className="popup__form_label">
          <input
            type="text"
            id="title"
            name="name"
            className="popup__input popup__input_type_name popup__input_type_title"
            placeholder="Название"
            maxLength={30}
            minLength={2}
            autoComplete="off"
            required
          />
          <span id="title-error" />
        </label>
        <label className="popup__form_label">
          <input
            type="url"
            id="link"
            name="link"
            className="popup__input popup__input_type_info popup__input_type_link"
            placeholder="Ссылка на картинку"
            autoComplete="off"
            required
          />
          <span id="link-error" />
        </label>
        <button type="submit" value="Сохранить" className="popup__btn" disabled>
          Сохранить
        </button>
      </form>
    </div>
  </div>

  {/* Img wiev popup */}
  <div className="popup popup_content_image">
    <div className="popup__image-box">
      <button
        type="button"
        className="popup__btn_action_close"
        title="Закрыть окно просмотра"
      />
      <figure className="popup__figure">
        <img src="#" className="popup__image" alt="Image" title="Image Title" />
        <figcaption className="popup__image-caption">Image Caption</figcaption>
      </figure>
    </div>
  </div>

  {/* Img confirm popup */}
  <div className="popup popup-confirm">
    <div className="popup__container">
      <button
        type="button"
        className="popup__btn_action_close"
        title="Закрыть форму без сохранения данных"
      />
      <h3 className="popup__heading">Вы уверены?</h3>
      <button type="submit" className="popup__btn">
        Да
      </button>
    </div>
  </div>

  {/* Update avatar popup */}
  <div className="popup popup-avatar">
    <div className="popup__container">
      <button
        type="button"
        className="popup__btn_action_close"
        title="Закрыть форму без сохранения данных"
      />
      <h3 className="popup__heading">Обновить аватар</h3>
      <form
        action="#"
        name="popup-form"
        className="popup__form popup-avatar__form"
        noValidate
      >
        <label className="popup__form_label">
          <input
            type="url"
            id="link-input"
            name="link"
            className="popup__input popup__input_type_info popup__input_type_link"
            placeholder="Ссылка на картинку"
            autoComplete="off"
            required
          />
          <span id="link-input-error" />
        </label>
        <button type="submit" className="popup__btn">
          Сохранить
        </button>
      </form>
    </div>
  </div>
</div>
  );
}

export default App;