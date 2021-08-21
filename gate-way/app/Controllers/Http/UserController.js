"use strict";

const { rpcRequest } = require("rabbitmq-micro-service-framework");

class UserController {
  async createUser({ request, response }) {
    const data = await rpcRequest("user-service", "create:user", {
      // hello: "hello",
    });
    return response.json(data);
  }
}

module.exports = UserController;
