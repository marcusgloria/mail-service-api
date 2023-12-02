const emailController = require("../controllers/emailControllers")


async function emailRoutes(server){
    server.post("/send",emailController.sendEmail())
}

module.exports = emailRoutes;