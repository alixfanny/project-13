import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { profileSuccess } from '../redux/reduceur/ProfilReduceur';
import { datas } from '../services/CallApi';
import '../css/component/profil.css';

function UserProfile() {
  const navigate = useNavigate();
  const navigateToEditProfile = () => {
    navigate("ModificationProfil")
  }

  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.profileData);
  const { firstName, lastName } = profileData;
  
  useEffect(() => {
    if (!firstName || !lastName) {
      // Récupérer les données de l'utilisateur uniquement si elles ne sont pas déjà présentes
      datas.username()
        .then((response) => {
          dispatch(profileSuccess(response.data.body));
        })
        .catch((error) => {
          console.error('Erreur de connexion :', error);
        });
    }
  }, [dispatch, firstName, lastName]);

  

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1> Welcome back<br />{firstName} {lastName}!</h1>
        <button className="edit-button" onClick={navigateToEditProfile}>
          Edit Name
        </button>
      </div>
    </main>
  );
}

export default UserProfile;