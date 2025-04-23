const Lead = require("../models/lead.model");


const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) =>
      txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    );
  };

const createLead = async (req, res) => {
    const { name, email, status} = req.body;

    if (!name || !email || !status) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
        const newLead = new Lead({    
            name: name.trim(),
            email: email.trim().toLowerCase(),
            status: status ? toTitleCase(status) : undefined,
        });
        await newLead.save();
        res.status(201).json(newLead);
      } catch (err) {
        if (err.code === 11000) {
          res.status(400).json({ message: 'Email already exists' });
        } else {
          res.status(500).json({ message: err.message });
        }
      }
}



const fetchLeads = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
    
        const leads = await Lead.find()
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit);
    
        const total = await Lead.countDocuments();
    
        res.json({
          leads,
          total,
          page,
          totalPages: Math.ceil(total / limit),
        });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

const singleLead = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Lead.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

module.exports = {
  fetchLeads,
  createLead, 
  singleLead
}