'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true,
});
Object.defineProperty(exports, 'UserRoute', {
  enumerable: true,
  get: function () {
    return UserRoute;
  },
});
const _express = require('express');
const _userscontroller = require('../controllers/users.controller');
const _usersdto = require('../dtos/users.dto');
const _validationmiddleware = require('../middlewares/validation.middleware');
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
let UserRoute = class UserRoute {
  initializeRoutes() {
    this.router.get(`${this.path}`, this.usersController.getUsers);
    this.router.get(`${this.path}/:id(\\d+)`, this.usersController.getUserById);
    this.router.post(`${this.path}`, (0, _validationmiddleware.ValidationMiddleware)(_usersdto.CreateUserDto), this.usersController.createUser);
    this.router.put(
      `${this.path}/:id(\\d+)`,
      (0, _validationmiddleware.ValidationMiddleware)(_usersdto.UpdateUserDto, true),
      this.usersController.updateUser,
    );
    this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteUser);
  }
  constructor() {
    _define_property(this, 'path', '/users');
    _define_property(this, 'router', (0, _express.Router)());
    _define_property(this, 'user', new _userscontroller.UserController());
    this.initializeRoutes();
  }
};

//# sourceMappingURL=users.route.js.map
