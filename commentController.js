const Comment = require('../models/Comment');

exports.getComments = async (req, res) => {
  const comments = await Comment.find().populate('post');
  res.json(comments);
};

exports.createComment = async (req, res) => {
  const comment = await Comment.create(req.body);
  res.json(comment);
};

exports.updateComment = async (req, res) => {
  const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(comment);
};

exports.deleteComment = async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
