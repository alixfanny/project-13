import { profileSuccess } from '../redux/reduceur/ProfilReduceur';
import { useNavigate } from 'react-router-dom';
import { datas } from '../services/CallApi';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../css/component/EditUserNameForm.css'


function EditUserNameForm() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(state => state.profile.profileData)

  useEffect(() => {
    if(state.firstName) {
      setFirstName(state.firstName)
      setLastName(state.lastName)
    }
    return() => {
      //
    };
  }, [state])
  
  const handleUserNameSave = () => {
    datas.updateUsername(firstName, lastName)
    .then((response) => {
      dispatch(profileSuccess(response.data.body));
      navigate("/profile");
    })
    .catch((error) => {
      console.error("Erreur lors de la mise à jour du profil :", error);
    });
  }

  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <div>
        <div className="main bg-dark container">
          <h1 className='title'> Edit yours names</h1>
          <div className='container-input'>
            <input className='input-form'
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input className='input-form'
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='container-button'>
            <button className='button-form' onClick={handleUserNameSave}>Save</button>
            <button className='button-form'onClick={handleCancel}>Cancel</button>
          </div>
        </div>
    </div>
  );
}
export default EditUserNameForm;


