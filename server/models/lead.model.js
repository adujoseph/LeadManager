const mongoose = require('mongoose');

const LeadSchema = mongoose.Schema({
  name: {
    type: String,
    required:  [true, "Please enter lead name"],
    minlength: [3, 'Name must be at least 3 characters long'],
  },
  email: {
    type: String,
    required:  [true, "Please enter lead email"],
    lowercase: true, 
    trim: true,  
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Email is invalid'], 
  },
  status: {
    type: String,
    enum: {
      values: ['New', 'Engaged', 'Proposal Sent', 'Closed-Won', 'Closed-Lost'],
      message: 'Status must be one of: New, Engaged, Proposal Sent, Closed-Won, Closed-Lost'
    },
    default: 'New',
  }
}, 
{
  timestamps: true,
});

const Model = mongoose.model('Lead', LeadSchema);
module.exports = Model;