const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
var path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.all('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(cors())


app.post('/formulario', (req, res) => {
    console.log(" ETAMOS EN FORM");
    configMensaje.send(req.body, result => {
        // PUEDES CAMBIAR que cambio? ahi poner el mayor
        res.json({ message: 'Here' })
    });
    // configMensaje(req.body);
    // res.status(200).send();

})
app.get('/', (req, res) => {
    // res.status(200).send();
    res.render('index', { title: 'Express' });
})
app.listen(PORT, () => {
    console.log('Servidor corriendo');
});