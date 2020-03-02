const http = require('http');
const express = require('express');
const routers = require('./routers');
const morgan = require('morgan')
const models = require('./models');
const cors = require('cors');

const puerto = process.env.PORT || 3000;

const app = express();

//muestra log en la consola
app.use(morgan('combined'));

app.use(cors());
//convierte a formato json
app.use(express.json());

app.use('/',routers);


//crea server
const server = http.createServer(app);

// para que la base de datos se actualize desde los modelos cada vez que se encienda la API.
//recomendado solo para desarrollo, utilize migraciones para produccion.
/*if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined){
    models.sequelize.sync().then(() => {
        console.log('Database Updated.');
    })
    .catch((err) => {
        console.log('Error updating database: ', err);
    });
}*/

//Enciende el server
server.listen(puerto,()=>{
    console.log(`server escuchando en el puerto ${puerto}`);
});