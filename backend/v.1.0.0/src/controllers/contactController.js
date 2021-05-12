const asyncHandler = require('express-async-handler');
const Address = require('../setup/models/addressModel.js');

// Create a new contact
exports.createContact = asyncHandler(async(req, res) => {
    const {
        Name,
        email,
        message
    } = req.body

    const contact = await Contact.create({
        Name,
        email,
        message
    })
    if (contact) {
        res.status(201).json({
            _id: contact._id,
            Name: contact.Name,
            email: contact.email,
            Message: contact.email,

        })
    } else {
        res.status(400)
        throw new Error('Invalid contact data')
    }
})