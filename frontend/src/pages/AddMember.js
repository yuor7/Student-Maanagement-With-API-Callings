import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/AddMember.css';

function AddMember() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    bio: '',
    roll: '',
    year: '',
    degree: '',
    project: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aboutYourAim: '',
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('role', formData.role);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('bio', formData.bio);
      formDataToSend.append('roll', formData.roll);
      formDataToSend.append('year', formData.year);
      formDataToSend.append('degree', formData.degree);
      formDataToSend.append('project', formData.project);
      formDataToSend.append('hobbies', formData.hobbies);
      formDataToSend.append('certificate', formData.certificate);
      formDataToSend.append('internship', formData.internship);
      formDataToSend.append('aboutYourAim', formData.aboutYourAim);
      if (image) {
        formDataToSend.append('image', image);
      }

      await axios.post('/api/members', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFormData({ name: '', role: '', email: '', phone: '', bio: '', roll: '', year: '', degree: '', project: '', hobbies: '', certificate: '', internship: '', aboutYourAim: '' });
      setImage(null);
      setImagePreview(null);
      alert('Member added successfully!');
      navigate('/members');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error adding member');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-member-page">
      <h2>Add New Team Member</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter member name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role *</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            placeholder="e.g., Developer, Designer"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="roll">Roll Number *</label>
            <input
              type="text"
              id="roll"
              name="roll"
              value={formData.roll}
              onChange={handleChange}
              required
              placeholder="e.g., 10"
            />
          </div>

          <div className="form-group">
            <label htmlFor="year">Year *</label>
            <input
              type="text"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              placeholder="e.g., 2nd Year"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              placeholder="e.g., b.tech"
            />
          </div>
          <div className="form-group">
            <label htmlFor="project">Project</label>
            <input
              type="text"
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="e.g., e.com website"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="hobbies">Hobbies</label>
          <input
            type="text"
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            placeholder="e.g., playing games, reading books"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="certificate">Certificate</label>
            <input
              type="text"
              id="certificate"
              name="certificate"
              value={formData.certificate}
              onChange={handleChange}
              placeholder="e.g., fullstack"
            />
          </div>
          <div className="form-group">
            <label htmlFor="internship">Internship</label>
            <input
              type="text"
              id="internship"
              name="internship"
              value={formData.internship}
              onChange={handleChange}
              placeholder="e.g., cloud computing"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="aboutYourAim">About Your Aim</label>
          <textarea
            id="aboutYourAim"
            name="aboutYourAim"
            value={formData.aboutYourAim}
            onChange={handleChange}
            placeholder="e.g., TO learn new technology AND WANT TO WORK IN MANY PROJECTS"
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio">Bio (Optional)</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Enter a short bio (optional)"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Profile Photo (Image Upload) *</label>
          <div className="image-upload-container">
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
                <button
                  type="button"
                  className="btn-remove-image"
                  onClick={() => {
                    setImage(null);
                    setImagePreview(null);
                  }}
                >
                  Remove
                </button>
              </div>
            )}
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              required={!image}
              style={{ display: 'none' }}
            />
            <button
              type="button"
              className="btn-browse"
              onClick={() => document.getElementById('image').click()}
            >
              Browse...
            </button>
            <span className="file-info">
              {image ? image.name : 'No file selected'}
            </span>
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-submit" disabled={loading}>
            {loading ? 'Adding...' : 'Submit'}
          </button>
          <button 
            type="button" 
            className="btn btn-cancel" 
            onClick={() => navigate('/members')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMember;
