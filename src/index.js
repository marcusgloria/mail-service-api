

const fastify = require("fastify");
const server = fastify();

server.get("/", () => {

    return "Hello World!"
})


server.listen({
    port: process.env.PORT || 3200
})
