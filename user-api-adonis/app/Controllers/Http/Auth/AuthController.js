"use strict";
const userService = use("App/Services/User/UserService");
const authService = use("App/Services/Auth/AuthService");

const register = async (data) => {
  const user = await userService.createUser(data);
  return user;
};

const login = async (data) => {
  const user = await authService.login(data);
  return user;
};

module.exports = { register, login };
