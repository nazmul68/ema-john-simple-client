import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("signOut successfull"))
      .catch((err) => console.error(err));
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="nav-link">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <button onClick={handleLogOut} className="btn-signOut">
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
      <p className="user-email">
        <small>{user?.email}</small>
      </p>
    </nav>
  );
};

export default Header;
