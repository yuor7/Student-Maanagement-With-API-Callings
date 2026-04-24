const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    bio: {
      type: String,
      default: '',
    },
    roll: {
      type: String,
    },
    rollNumber: {
      type: String,
    },
    year: {
      type: String,
    },
    degree: {
      type: String,
    },
    project: {
      type: String,
    },
    hobbies: {
      type: String,
    },
    certificate: {
      type: String,
    },
    internship: {
      type: String,
    },
    aboutYourAim: {
      type: String,
    },
    image: {
      type: String,
      default: null,
    },
    joinDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TeamMember', teamMemberSchema);
