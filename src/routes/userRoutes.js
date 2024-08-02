const userController = require('../controllers/userControllers');

module.exports = [
  { method: 'GET', path: '/users', handler: userController.getUsers },
  { method: 'GET', path: '/users/{id}', handler: userController.getUserById },
  { method: 'POST', path: '/users', handler: userController.createUser },
  { method: 'PUT', path: '/users/{id}', handler: userController.updateUser },
  { method: 'DELETE', path: '/users/{id}', handler: userController.deleteUser },
];
