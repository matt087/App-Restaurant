const express = require('express');
const app = express();
const cors = require('cors');


require('./database');

app.use(cors());
app.use(express.json()); //Conversión de los datos recibidos en el servidor

app.use(require('./routes/index'))
app.listen(3000);

console.log('Server on port', 3000);