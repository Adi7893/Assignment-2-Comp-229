let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our books model
let contact = require('../models/contact');
let contactController = require('../controllers/contact');
//GET ROUTE for the book list page -READ OPERATION
router.get('/', contactController.displaycontactList);

/*GET Route for displaying the Add Page- CREATE Operation*/
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the Add Page - CREATE operation*/

router.post('/add',contactController.processAddPage );

/*GET Route for displaying the Edit page - UPDATE operation*/

router.get('/edit/:id', contactController.displayEditPage);

/*POST Route for processing the Edit page - UPDATE Operation*/
router.post('/edit/:id', contactController.processEditPage);

/*GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', contactController.performDelete);

module.exports = router;