var express = require('express');
var router = express.Router();
module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { title: 'Home' });
}
module.exports.displayAboutPage = (req, res, next) => {
  res.render('index', { title: 'About Me' });
}

module.exports.displayProjectsPage = (req, res, next) => {
  res.render('index', { title: 'Projects page' });
}

module.exports.displayServicesPage = (req, res, next) => {
  res.render('index', { title: 'Services page' });
}

module.exports.displayContactPage = (req, res, next) => {
  res.render('index', { title: 'Contact Me' });
}
