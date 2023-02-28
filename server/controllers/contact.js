let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let contact = require('../models/contact');

//we want to display the contactList
module.exports.displaycontactList = (req, res, next) => {
    contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
           
            res.render('contact/list', { title: 'Contact', contactList: contactList,displayName:req.user?req.user.displayName:'' });
        }
    });
}
module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add',{title:'Add contact',displayName:req.user?req.user.displayName:''})
}

module.exports.processAddPage = (req, res, next) => {
    let newcontact = contact({
        "ContactName": req.body.ContactName,
        "ContactNumber": req.body.ContactNumber,
        "ContactEmail": req.body.ContactEmail
    });
    contact.create(newcontact, (err, contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactList');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('contact/edit', { title: 'Edit Contact', contact: contactToEdit,displayName:req.user?req.user.displayName:''  });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    let updatedContact = contact({
        "_id": id,
        "ContactName": req.body.ContactName,
        "ContactNumber": req.body.ContactNumber,
        "ContactEmail": req.body.ContactEmail
    });
    console.log('req.body.Email' , req.body)
    contact.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
           
            res.redirect('/contactList');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactList');
        }
    });
}