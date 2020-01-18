const express = require('express');
const morgan  = require('morgan');
const app = express();

app.set('port', process.env.PORT|| 3000);


//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use(require('./routes/router.js'))


app.listen(app.get('port'), ()=>console.log('server on port ', app.get('port')));






