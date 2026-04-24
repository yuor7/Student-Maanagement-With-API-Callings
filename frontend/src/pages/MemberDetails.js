import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/MemberDetails.css';

function MemberDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchMember();
  }, [id]);

  const fetchMember = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/members/${id}`);
      setMember(response.data);
      setFormData(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching member details: ' + err.message);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(`/api/members/${id}`, formData);
      setMember(formData);
      setIsEditing(false);
      alert('Member updated successfully!');
    } catch (err) {
      setError('Error updating member: ' + err.message);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      try {
        await axios.delete(`/api/members/${id}`);
        alert('Member deleted successfully!');
        navigate('/members');
      } catch (err) {
        setError('Error deleting member: ' + err.message);
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading member details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!member) {
    return <div className="error-message">Member not found</div>;
  }

  return (
    <div className="member-details-page">
      <div className="details-header">
        <button className="btn-back" onClick={() => navigate('/members')}>
          ← Back to Members
        </button>
        <h2>{member.name}</h2>
      </div>

      <div className="details-container">
        {!isEditing && member.image && (
          <div className="member-image-large">
            <img src={`/uploads/${member.image.replace('uploads\\\\', '').replace('uploads/', '')}`} alt={member.name} />
          </div>
        )}

        {isEditing ? (
          <div className="edit-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="roll">Roll Number</label>
              <input
                type="text"
                id="roll"
                name="roll"
                value={formData.roll || formData.rollNumber || ''}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year || ''}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree || ''}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="project">Project</label>
              <input
                type="text"
                id="project"
                name="project"
                value={formData.project || ''}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="hobbies">Hobbies</label>
              <input
                type="text"
                id="hobbies"
                name="hobbies"
                value={formData.hobbies || ''}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="certificate">Certificate</label>
              <input
                type="text"
                id="certificate"
                name="certificate"
                value={formData.certificate || ''}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="internship">Internship</label>
              <input
                type="text"
                id="internship"
                name="internship"
                value={formData.internship || ''}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="aboutYourAim">About Your Aim</label>
              <textarea
                id="aboutYourAim"
                name="aboutYourAim"
                value={formData.aboutYourAim || ''}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio || ''}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="edit-buttons">
              <button className="btn btn-save" onClick={handleSave}>
                Save Changes
              </button>
              <button className="btn btn-cancel" onClick={() => {
                setIsEditing(false);
                setFormData(member);
              }}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="details-view">
            <div className="detail-item">
              <span className="detail-label">Role:</span>
              <span className="detail-value">{member.role}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">
                <a href={`tel:${member.phone}`}>{member.phone}</a>
              </span>
            </div>

            {(member.roll || member.rollNumber) && (
              <div className="detail-item">
                <span className="detail-label">Roll Number:</span>
                <span className="detail-value">{member.roll || member.rollNumber}</span>
              </div>
            )}

            {member.year && (
              <div className="detail-item">
                <span className="detail-label">Year:</span>
                <span className="detail-value">{member.year}</span>
              </div>
            )}

            {member.degree && (
              <div className="detail-item">
                <span className="detail-label">Degree:</span>
                <span className="detail-value">{member.degree}</span>
              </div>
            )}

            {member.project && (
              <div className="detail-item">
                <span className="detail-label">Project:</span>
                <span className="detail-value">{member.project}</span>
              </div>
            )}

            {member.hobbies && (
              <div className="detail-item">
                <span className="detail-label">Hobbies:</span>
                <span className="detail-value">{member.hobbies}</span>
              </div>
            )}

            {member.certificate && (
              <div className="detail-item">
                <span className="detail-label">Certificate:</span>
                <span className="detail-value">{member.certificate}</span>
              </div>
            )}

            {member.internship && (
              <div className="detail-item">
                <span className="detail-label">Internship:</span>
                <span className="detail-value">{member.internship}</span>
              </div>
            )}

            {member.aboutYourAim && (
              <div className="detail-item">
                <span className="detail-label">About Your Aim:</span>
                <span className="detail-value">{member.aboutYourAim}</span>
              </div>
            )}

            {member.bio && (
              <div className="detail-item">
                <span className="detail-label">Bio:</span>
                <span className="detail-value">{member.bio}</span>
              </div>
            )}

            <div className="detail-item">
              <span className="detail-label">Joined:</span>
              <span className="detail-value">
                {new Date(member.joinDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            <div className="action-buttons">
              <button className="btn btn-edit" onClick={() => setIsEditing(true)}>
                Edit Member
              </button>
              <button className="btn btn-delete" onClick={handleDelete}>
                Delete Member
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MemberDetails;
