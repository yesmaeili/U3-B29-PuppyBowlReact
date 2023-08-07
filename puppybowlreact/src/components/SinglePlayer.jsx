import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPlayers } from "../API/index.js";

const SinglePlayer = ({ player }) => {
  // Use the useNavigate hook from react-router-dom
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the SinglePlayer component with the player's ID as a parameter
    navigate(`/players/${player.id}`);
  };

  return (
    <div>
      <h1>{player.name}</h1>
      <p>Age: {player.age}</p>
      <p>Position: {player.position}</p>
      <button onClick={handleButtonClick}>View Player</button>
    </div>
  );
};

export default SinglePlayer;