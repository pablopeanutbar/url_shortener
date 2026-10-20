import express from 'express';
import { handleShortUrl,createShortId } from '../controllers/logic.js';

const routes = express.Router();

routes.post('/', createShortId)
routes.get('/:id', handleShortUrl)




export default routes;