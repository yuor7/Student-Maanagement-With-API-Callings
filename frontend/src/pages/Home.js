import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Home.css';

function Home() {
  const [teamName, setTeamName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch team name
    axios.get('/api/team')
      .then((response) => setTeamName(response.data.teamName))
      .catch((error) => console.error('Error fetching team name:', error));
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="team-title">{teamName || 'TEAM BLUE'}</h1>
        <p className="team-description">Welcome to Team Management</p>
        
        <div className="manage-team-box">
          <p className="manage-label">Manage Team</p>
          <div className="cta-buttons">
            <button 
              className="cta-button add-member-btn"
              onClick={() => navigate('/add-member')}
            >
              Add Member
            </button>
            <button 
              className="cta-button view-members-btn"
              onClick={() => navigate('/members')}
            >
              View Members
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
