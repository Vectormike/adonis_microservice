const { createService } = require("rabbitmq-micro-service-framework");
const { registerHandler, loginHandler } = require("../handlers/user.handler");

createService("user-service").then((service) => {
  service.registerRpcHandler("create:user", (data) => {
    return registerHandler(data);
  });
  service.registerRpcHandler("login:user", (data) => {
    return loginHandler(data);
  });
});
