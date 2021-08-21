"use strict";
const httpStatus = require("http-status");
const User = use("App/Models/User");
const BadRequestException = use("App/Exceptions/BadRequestException");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  const isUserNameTaken = await User.findBy("username", userBody.username);
  if (isUserNameTaken) {
    throw new BadRequestException("Username already taken");
  }
  const user = await User.create({
    username: userBody.username,
    password: userBody.password,
  });
  return user;
};

module.exports = { createUser };
