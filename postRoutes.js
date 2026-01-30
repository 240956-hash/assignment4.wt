const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/roleMiddleware');
const {
  getPosts,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');

router.get('/', getPosts);                 // public
router.post('/', auth, admin, createPost); // admin only
router.put('/:id', auth, admin, updatePost);
router.delete('/:id', auth, admin, deletePost);

module.exports = router;
