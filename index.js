import express, { json } from 'express';
import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
import connectMongoDB from './connection.js';
import routes from './routes/routes.js';
import pug from 'pug';

const app = express();
const PORT = 8001;
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs');
app.set("views","./views")

connectMongoDB();
app.use(express.json());

app.use('/',routes)




app.listen(PORT,()=> console.log(`Sever started at ${PORT}`))