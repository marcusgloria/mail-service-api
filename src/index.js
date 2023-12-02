

const fastify = require("fastify");
const emailRoutes = require("./routes/email");
const cors = require("@fastify/cors");
const formbody = require("@fastify/formbody");

const server = fastify();

const corsOpt = {
    credentials: true,
    origin: /localhost\:3200/,
}

server.register(cors, corsOpt);
server.register(formbody);

server.register(emailRoutes);

server.listen({
    port: process.env.PORT || 3200
})

 