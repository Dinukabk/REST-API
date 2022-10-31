import express from 'express';

import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.get('/',(req,res) =>

{
    console.log('[test]');
    res.send("hello fron homepage ");
})

app.use(bodyParser.json());
app.listen(PORT, ()=> console.log("app is running"));
