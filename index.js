const http = require('http');
const express = require('express');
const routers = require('./routers');
const models = require('./models');
const cors = require('cors');

const puerto = process.env.PORT || 3000;

const app = express();

app.use(cors());
//convierte a formato json
app.use(express.json())

app.use('/',routers)


//crea server
const server = http.createServer(app);

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined){
    models.sequelize.sync().then(() => {
        console.log('Database Updated.');
    })
    .catch((err) => {
        console.log('Error updating database: ', err);
    });
}

//enciende el server
server.listen(puerto,()=>{
    console.log(`server escuchando en el puerto ${puerto}`);
});