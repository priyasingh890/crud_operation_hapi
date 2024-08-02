const User = require('../models/userModel');

exports.getUsers = async (request, h) => {
  const users = await User.query();
  return users;
};

exports.getUserById = async (request, h) => {
  const user = await User.query().findById(request.params.id);
  return user || h.response({ message: 'User not found' }).code(404);
};

exports.createUser = async (request, h) => {
  const newUser = await User.query().insert(request.payload);
  return newUser;
};

exports.updateUser = async (request, h) => {
  const updatedUser = await User.query().patchAndFetchById(request.params.id, request.payload);
  return updatedUser || h.response({ message: 'User not found' }).code(404);
};

exports.deleteUser = async (request, h) => {
  const rowsDeleted = await User.query().deleteById(request.params.id);
  return rowsDeleted ? h.response().code(204) : h.response({ message: 'User not found' }).code(404);
};
