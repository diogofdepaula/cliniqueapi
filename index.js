require('dotenv').config()

const express = require ('express');
const routes = require ('./src/routes/routes');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

// somente para comentar a nota branch
//app.use('/api.appmed', routes);

app.use('/', routes);

app.use('/hello', (req, res) => {
        res.json({
            "hello" : "hello world"
        })
     });

// assim era antes do Docker
// app.listen(process.env.PORT || 4001)

// app.listen(4001, () => {
//     console.log("API está funcionando na porta 4001")
// });

//const PORT = 4001;

const HOST = '0.0.0.0';

app.listen(process.env.PORT || 4005, HOST)

