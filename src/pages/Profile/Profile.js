import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import "./Profile.scss";
import { selectUser } from "../../features/userSlice";

function Profile() {
    const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Navbar />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Avatar"
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <p>Member since {user.createdAt}</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
