import express from 'express';

import bodyParser from 'body-parser';

import userRoutes from './routes/users.js'

const app = express();
const PORT = 5000;

app.get('/',(req,res) =>{res.send("hello fron homepage ");})

app.use('/users',userRoutes);

app.use(bodyParser.json());
app.listen(PORT, ()=> console.log("app is running"));

