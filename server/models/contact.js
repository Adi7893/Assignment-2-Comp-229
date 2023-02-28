let mongoose = require('mongoose');
let contactModel = mongoose.Schema({
    ContactName: String,
    ContactNumber: Number,
    ContactEmail: String
},
    {
        collection: "contacts"
    });

module.exports = mongoose.model('contacts', contactModel);