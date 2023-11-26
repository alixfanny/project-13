import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/component/profil.css';

function UserProfile() {
  const navigate = useNavigate();
  const navigateToEditProfile = () => {
    navigate("ModificationProfil")
  }

  const profileData = (state) => state.profile.profileData.firstName + " " + state.profile.profileData.lastName;
  const firstName = useSelector(profileData);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1> Welcome back<br />{firstName}!</h1>
        <button className="edit-button" onClick={navigateToEditProfile}>
          Edit Name
        </button>
      </div>
    </main>
  );
}

export default UserProfile;