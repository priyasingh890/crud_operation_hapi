
const User = require('../models/userModel');

exports.getUsers = async (request, h) => {
  try {
    const users = await User.query();
    return h.response(users).code(200);
  } catch (err) {
    console.error('Error fetching users:', err); // Log the error for debugging
    return h.response({ message: 'Internal Server Error' }).code(500);
  }
};

exports.getUserById = async (request, h) => {
  try {
    const user = await User.query().findById(request.params.id);
    return user ? h.response(user).code(200) : h.response({ message: 'User not found' }).code(404);
  } catch (err) {
    console.error('Error fetching user by ID:', err); // Log the error for debugging
    return h.response({ message: 'Internal Server Error' }).code(500);
  }
};
exports.createUser = async (request, h) => {
  try {
    if (!request.payload.name || !request.payload.email) {
      return h.response({ message: 'Missing required fields' }).code(400);
    }

    const newUser = await User.query().insert(request.payload);
    return h.response(newUser).code(201);

  } catch (err) {
    console.error('Error creating user:', err); // Logs the error
    return h.response({ message: 'Internal Server Error' }).code(500);
  }
};


exports.updateUser = async (request, h) => {
  try {
    // Check if user exists
    const userExists = await User.query().findById(request.params.id);
    if (!userExists) {
      return h.response({ message: 'User not found' }).code(404);
    }

    // Update user
    const updatedUser = await User.query().patchAndFetchById(request.params.id, request.payload);
    return h.response(updatedUser).code(200);

  } catch (err) {
    console.error('Error updating user:', err); // Log the error for debugging
    return h.response({ message: 'Internal Server Error' }).code(500);
  }
};

exports.deleteUser = async (request, h) => {
  try {
    // Check if user exists
    const rowsDeleted = await User.query().deleteById(request.params.id);
    return rowsDeleted ? h.response().code(204) : h.response({ message: 'User not found' }).code(404);

  } catch (err) {
    console.error('Error deleting user:', err); // Log the error for debugging
    return h.response({ message: 'Internal Server Error' }).code(500);
  }
};
