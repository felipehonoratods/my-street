const express = require('express');
const mongoose = require('mongoose');
const RuaController = require('./controllers/RuaController');
const cors = require('cors');

require('./models/Rua');
const Rua = mongoose.model('Rua');

const app = express();

mongoose.connect('mongodb+srv://felipe:99785867@cluster0.ne68r.mongodb.net/myStreet?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((err) => {
    console.log("Erro: Conexão com o BD MongoDB não realizado com sucesso: " + err);
});

app.use(cors());
app.use(express.json());

app.post('/rua', RuaController.store);

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});