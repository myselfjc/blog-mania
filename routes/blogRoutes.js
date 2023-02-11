const express = require('express');
const router = express.Router();
const blogController = require('./../controller/blogController');

router.route('/').get(blogController.getAllBlogs);
router.route('/add').post(blogController.addBlogs);

module.exports = router;