
const express = require("express");
const router = express.Router();
const { createLead, fetchLeads, singleLead } = require("../controllers/lead.controller.js");


router.post("/",  createLead);
router.get("/",  fetchLeads);
router.get("/:id", singleLead)

module.exports = router;