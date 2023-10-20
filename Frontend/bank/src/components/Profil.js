/*import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { profileSuccess } from './votre-reduceur-profile'; // Importez l'action profileSuccess

function UserProfile() {
  const [formData, setFormData] = useState({
    firstName: 'Tony',
    lastName: 'Jarvis',
  });

  const [editing, setEditing] = useState(false);

  const dispatch = useDispatch();

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Dispatchez l'action profileSuccess pour mettre à jour les données du profil
    dispatch(profileSuccess(formData));
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main className="main bg-dark">
      <div className="header">
      <h1> Welcome back<br/>{formData.firstName} {formData.lastName}!</h1>
      <button className="edit-button" onClick={handleEditClick}>
           Edit Name
      </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div classNameName="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p classNameName="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default UserProfile;*/