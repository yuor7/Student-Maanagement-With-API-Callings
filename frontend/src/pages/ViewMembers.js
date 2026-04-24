import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MemberCard from '../components/MemberCard';
import '../styles/ViewMembers.css';

function ViewMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/members');
      setMembers(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching members: ' + err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMemberClick = (memberId) => {
    navigate(`/members/${memberId}`);
  };

  return (
    <div className="view-members-page">
      <div className="page-header">
        <h2>MEET OUR AMAZING TEAM</h2>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading members...</div>
      ) : members.length === 0 ? (
        <div className="empty-state">
          <p>No team members added yet.</p>
          <a href="/add-member" className="btn">Add First Member</a>
        </div>
      ) : (
        <div className="members-grid">
          {members.map((member) => (
            <MemberCard
              key={member._id}
              member={member}
              onClick={() => handleMemberClick(member._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewMembers;
