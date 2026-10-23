import express, { response } from 'express';
import { handleShortUrl,createShortId } from '../controllers/logic.js';
import URL from '../model/url-schema.js'

const routes = express.Router();

routes.get('/',async(req,res)=>{
    const allUrls = await URL.find({});
    return res.json(allUrls)
})



routes.post('/', createShortId)
routes.get('/:id', handleShortUrl)





export default routes;