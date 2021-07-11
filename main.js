const express = require('express');
const userRouter = require('./routers/userRouter');


var cors = require('cors')


const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));


require('./configs/database');

app.use('/api/users', userRouter);
app.listen(8000);