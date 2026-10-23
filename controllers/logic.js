import routes from '../routes/routes.js'
import { nanoid } from 'nanoid'
import URL from '../model/url-schema.js'


export async function createShortId(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error:"url is required"})
    
const shortId = nanoid(8)
    await URL.create({
        shortId:shortId,
        redirectUrl:body.url
    })
    return res.render("urls",{
    "shortId": shortId,
    "redirectUrl": body.url
})
}

export async function handleShortUrl(req,res){
    const shortIdCreated = req.params.id
    // console.log("id recieved:",shortIdCreated)
    
    const entry = await URL.findOne({shortId:shortIdCreated});
    // console.log("entry found")
    if(!entry){
        return res.status(404).json({message:"short url is not valid"})
    }
    return res.redirect(entry.redirectUrl)
}
