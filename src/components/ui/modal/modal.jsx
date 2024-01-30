import React from "react";
import "./modalstyle.css";

const Modal = ({ modalItemData, closeModal }) => {
  const AddressCity = modalItemData?.address?.city ?? null;
  const AddressAddress = modalItemData?.address?.address ?? null;

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-background")) {
      closeModal();
    }
  };

  return (
    <div className="modal-background" onClick={handleClickOutside}>
      <div className="modal">
        <div>
          ФИО:{" "}
          {`${modalItemData.firstName} ${modalItemData.lastName} ${modalItemData.maidenName}`}
        </div>
        <div>Возраст: {modalItemData.age}</div>
        <div>Адрес: {`${AddressAddress}, ${AddressCity}`}</div>
        <div>Рост: {modalItemData.height}</div>
        <div>Вес: {modalItemData.weight}</div>
        <div>Номер телефона: {modalItemData.phone}</div>
        <div>E-mail: {modalItemData.email}</div>
      </div>
    </div>
  );
};
export default Modal;
