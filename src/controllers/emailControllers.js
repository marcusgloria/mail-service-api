const MailQueue = require("../queue/MailQueue");



async function sendEmail(request, reply){
    const {
        email,
        firstName,
        lastName,
    } = request.body;

    const template = `
        Olá ${firstName} ${lastName}, sua assinatura foi confirmada!`

   try{
    await MailQueue.add({
        to: email,
        from: "juniobarbosag@gmail.com",
        subject: "Assinatura Confirmada",
        text: template
    })

    return reply.code(200).send();

   }catch{
    return reply.code(500).send("Internal server error");
   }
}

module.exports = {
    sendEmail
}