const express = require("express");
const { getPosts, createPost } = require('../controllers/postsC.js');

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

module.exports = router;