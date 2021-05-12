const express = require('express');
const router = express.Router()
const {
    createContact,

} = require('../controllers/contactController.js');

router.post('/create', createContact);

module.exports = router;