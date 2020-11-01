const express = require('express');
const router = express.Router();
const SearchController = require('../controllers/search');

const controller = new SearchController();

router.get('/', (req, res) =>  controller.index(req, res));
router.post('/', (req, res) =>  controller.search(req, res));

module.exports = router;
