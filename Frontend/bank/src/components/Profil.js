import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileSuccess } from '../redux/reduceur/ProfilReduceur';
import { datas } from '../services/CallApi';

function UserProfile() {
  const dispatch = useDispatch();
  useEffect(() => {datas.username()
    .then( (response) => {dispatch(profileSuccess(response.data.body))})
    .catch((error) => {
      console.error('Erreur de connexion :', error);
    },[dispatch]);
  })

  const name = (state) => state.profile.profileData.firstname;
  const firstname = useSelector(name);

 /* const handleEditClick = () => {
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
  };*/

  return (
    <main className="main bg-dark">
      <div className="header">
      <h1> Welcome back<br/>{firstname}!</h1>
      <button className="edit-button">
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

export default UserProfile;