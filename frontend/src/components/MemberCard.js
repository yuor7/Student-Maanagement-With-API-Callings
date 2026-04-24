import React from 'react';
import '../styles/MemberCard.css';

function MemberCard({ member, onClick }) {
  const getImageSrc = () => {
    if (!member.image) return 'https://via.placeholder.com/300x300?text=No+Image';
    const filename = member.image.replace('uploads\\\\', '').replace('uploads/', '');
    return `/uploads/${filename}`;
  };

  return (
    <div className="member-card" onClick={onClick}>
      <div className="member-image-container">
        <img src={getImageSrc()} alt={member.name} className="member-image" />
      </div>
      <div className="member-card-body">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-roll">Roll Number: {member.roll || member.rollNumber || 'N/A'}</p>
      </div>
      <button className="view-details-btn">VIEW DETAILS</button>
    </div>
  );
}

export default MemberCard;
