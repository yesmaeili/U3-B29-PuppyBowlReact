import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'; // Make sure to import useParams and useNavigate
import { fetchPlayers } from '../API/index.js';

const AllPlayers = () => {
  // Create a state variable to hold the players' data
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Define an async function to fetch players and set them into state
    async function fetchAndSetPlayers() {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    }

    // Invoke the async function to fetch and set the players
    fetchAndSetPlayers();
  }, []);

  return (
    <div>
      <h1>All Players</h1>
      <div>
        {players.map((player) => (
          <div key={player.id}>
            <h4>{player.name}</h4>
            <p>Age: {player.age}</p>
            <p>Position: {player.position}</p>
           </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlayers;