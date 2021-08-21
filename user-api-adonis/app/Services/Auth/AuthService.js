"use strict";
const userService = use("App/Services/User/UserService.js");
const UnauthorisedException = use("App/Exceptions/UnauthorisedException");
const requestOperationResponse = require("../../Helpers/requestOperationResponse");
/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const login = async (data) => {
  const { email, password } = data;
  try {
    const user = await userService.getUserByUserName(email);
    if (!user) {
      return requestOperationResponse({
        status_code: 400,
        message: "Incorrect username or password",
      });
    }
    return requestOperationResponse({
      status_code: 200,
      status: "Success",
      message: "Login is successful",
      results: user,
    });
  } catch (error) {
    return requestOperationResponse({
      status_code: 400,
      error_context: error.message,
    });
  }
};

module.exports = { login };
