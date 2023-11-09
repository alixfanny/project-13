import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { profileSuccess } from '../redux/reduceur/ProfilReduceur';
import { useNavigate } from 'react-router-dom';
import { datas } from '../services/CallApi';
import '../css/component/EditUserNameForm.css'

function EditUserNameForm({ name }) {
  const [editedUserName, setEditedUserName] = useState(name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserNameSave = () => {
    datas.updateUsername(editedUserName)
    .then(() => {
      const updatedProfile = { ...name, firstName: editedUserName };
      dispatch(profileSuccess(updatedProfile));

      navigate("/profile");
    })
    .catch((error) => {
      console.error("Erreur lors de la mise à jour du profil :", error);
    });
  }

  return (
    <div>
        <div className="main bg-dark container">
          <h1 className='title'> Welcome back</h1>
          <div className='container-input'>
            <input className='input-form'
              type="text"
              value={editedUserName}
              onChange={(e) => setEditedUserName(e.target.value)}
            />
            <p>!</p>
          </div>
          <div className='container-button'>
            <button className='button-form' onClick={handleUserNameSave}>Save</button>
            <button className='button-form'>Cancel</button>
          </div>
        </div>
    </div>
  );
}

export default EditUserNameForm;