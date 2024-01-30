import React, { useState } from "react";
import Modal from "../modal/modal";
import Loader from "../loader/loader";
import "./tablestyle.css";

const Table = ({
  contactData,
  modalItemData,
  detailRow,
  isLoading,
  onSearchSend,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Возраст</th>
            <th>Пол</th>
            <th>Номер телефона</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((item) => (
            <tr
              key={item.id}
              onClick={() => {
                detailRow(item);
                openModal();
              }}
            >
              <td>{`${item.firstName} ${item.lastName} ${item.maidenName}`}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.phone}</td>
              <td>{`${item.address.address}, ${item.address.city}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div className="modal-overlay">
          <Modal modalItemData={modalItemData} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default Table;
