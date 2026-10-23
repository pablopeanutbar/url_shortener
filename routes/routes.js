import express, { response } from 'express';
import { handleShortUrl,createShortId } from '../controllers/logic.js';
import URL from '../model/url-schema.js'

const routes = express.Router();

routes.get('/',(req,res)=>{
    res.render('home')
})



routes.post('/', createShortId)
routes.get('/:id', handleShortUrl)





export default routes;