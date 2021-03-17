import React, { useState } from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./SwipeButtons.css";
import { IconButton } from "@material-ui/core";

function SwipeButtons() {
  
  return (
    <div className="swipeButtons">
      <IconButton
        className="swipeButtons__repeat"
        onClick={() => window.location.reload(false)}
      >
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
