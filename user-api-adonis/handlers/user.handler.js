const {
  register,
  login,
} = require("../app/Controllers/Http/Auth/AuthController");

const registerHandler = (data) => {
  return register(data);
};

const loginHandler = (data) => {
  return login(data);
};

module.exports = { registerHandler, loginHandler };
