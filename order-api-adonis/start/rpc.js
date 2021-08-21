const { rpcRequest } = require("rabbitmq-micro-service-framework");

rpcRequest("user-service", "create:user", {hello: "hello"}).then(data=> {
console.log("🚀 ~ file: rpc.js ~ line 4 ~ rpcRequest ~ data", data)
    
})