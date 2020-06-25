const nodemailer = require("nodemailer");

module.exports = {
    send: (formulario, callback) => {
        console.log(formulario);
        var transporter = nodemailer.createTransport({
            service: "gmail",
            port: 588,
            auth: {
                user: "joelg100314@gmail.com", // Cambialo por tu email
                pass: "Semeolvido1003" // Cambialo por tu password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: `"${formulario.nombre} 👻" <${formulario.correo}>`,
            to: "joelg100314@gmail.com", // Cambia esta parte por el destinatario
            subject: formulario.asunto,
            html: `
            <strong>Nombre:</strong> ${formulario.nombre} <br/>
            <strong>E-mail:</strong> ${formulario.correo}  <br/>
            <strong>Celular:</strong> ${formulario.celular} <br/>
            <strong>Mensaje:</strong> ${formulario.mensaje}
            `
        };

        transporter.sendMail(mailOptions, function(err, info) {
            if (err) console.log(err);
            else console.log(info);
            callback(err, info);
        });
    }
};
