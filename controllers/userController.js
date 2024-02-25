// controllers/UserController.js
const User = require('../models/User');

exports.findAll = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

exports.create = async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  res.send(savedUser);
};

exports.findOne = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
};

exports.update = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updatedUser);
};

exports.delete = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send({ message: 'User deleted' });
};
