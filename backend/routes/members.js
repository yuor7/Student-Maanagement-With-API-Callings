const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const TeamMember = require('../models/TeamMember');
const upload = require('../middleware/multerConfig');

// Get all members
router.get('/', async (req, res) => {
  try {
    const members = await TeamMember.find().sort({ joinDate: -1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single member by ID
router.get('/:id', async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new member with image upload
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const member = new TeamMember({
      name: req.body.name,
      role: req.body.role,
      email: req.body.email,
      phone: req.body.phone,
      bio: req.body.bio,
      rollNumber: req.body.rollNumber,
      roll: req.body.roll || req.body.rollNumber,
      year: req.body.year,
      degree: req.body.degree,
      project: req.body.project,
      hobbies: req.body.hobbies,
      certificate: req.body.certificate,
      internship: req.body.internship,
      aboutYourAim: req.body.aboutYourAim,
      image: req.file ? 'uploads\\\\' + req.file.filename : null,
    });

    const newMember = await member.save();
    res.status(201).json(newMember);
  } catch (error) {
    // Clean up uploaded file if there's an error
    if (req.file) {
      fs.unlink(path.join(__dirname, '../uploads', req.file.filename), (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    res.status(400).json({ message: error.message });
  }
});

// Update a member with optional image upload
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    if (req.body.name) member.name = req.body.name;
    if (req.body.role) member.role = req.body.role;
    if (req.body.email) member.email = req.body.email;
    if (req.body.phone) member.phone = req.body.phone;
    if (req.body.bio) member.bio = req.body.bio;
    if (req.body.rollNumber) member.rollNumber = req.body.rollNumber;
    if (req.body.roll) member.roll = req.body.roll;
    if (req.body.year) member.year = req.body.year;
    if (req.body.degree) member.degree = req.body.degree;
    if (req.body.project) member.project = req.body.project;
    if (req.body.hobbies) member.hobbies = req.body.hobbies;
    if (req.body.certificate) member.certificate = req.body.certificate;
    if (req.body.internship) member.internship = req.body.internship;
    if (req.body.aboutYourAim) member.aboutYourAim = req.body.aboutYourAim;

    // Handle image update
    if (req.file) {
      // Delete old image if it exists
      if (member.image) {
        const oldFilename = member.image.replace('uploads\\\\', '').replace('uploads/', '');
        fs.unlink(path.join(__dirname, '../uploads', oldFilename), (err) => {
          if (err) console.error('Error deleting old image:', err);
        });
      }
      member.image = 'uploads\\\\' + req.file.filename;
    }

    const updatedMember = await member.save();
    res.json(updatedMember);
  } catch (error) {
    // Clean up uploaded file if there's an error
    if (req.file) {
      fs.unlink(path.join(__dirname, '../uploads', req.file.filename), (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    res.status(400).json({ message: error.message });
  }
});

// Delete a member
router.delete('/:id', async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // Delete associated image file
    if (member.image) {
      const filename = member.image.replace('uploads\\\\', '').replace('uploads/', '');
      fs.unlink(path.join(__dirname, '../uploads', filename), (err) => {
        if (err) console.error('Error deleting image:', err);
      });
    }

    await TeamMember.findByIdAndDelete(req.params.id);
    res.json({ message: 'Member deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
