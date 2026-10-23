import express, { json } from 'express';
import mongoose from 'mongoose';
import connectMongoDB from './connection.js';
import routes from './routes/routes.js';
import cors from 'cors';

const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// app.set('view engine','ejs');
// app.set("views","./views")

connectMongoDB();

app.use('/',routes)




app.listen(PORT,()=> console.log(`Sever started at ${PORT}`))