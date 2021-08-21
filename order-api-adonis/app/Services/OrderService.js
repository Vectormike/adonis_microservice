"use strict";
const userService = use("App/Services/User/UserService.js");
const UnauthorisedException = use("App/Exceptions/UnauthorisedException");
const httpStatus = require("http-status");
const requestOperationResponse = require("../../Helpers/requestOperationResponse");
/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const orderItem = async (email, password) => {
  const user = await userService.getUserByUserName(email);
  if (!user) {
    throw new UnauthorisedException(
      httpStatus.UNAUTHORIZED,
      "Incorrect username or password"
    );
  }
  return requestOperationResponse({
    status_code: 200,
    status: "Success",
    message: "Login is successful",
    results: user,
  });
};

module.exports = { login };
