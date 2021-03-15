import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import logo from "./wooferlogo.png";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();

  return (
    //BEM
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img className="header__logo" src={logo} alt="woofer logo with dog" />
      </Link>

      <Link to="/Likes">
        <IconButton>
          <FavoriteIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
