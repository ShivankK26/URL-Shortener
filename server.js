const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()



/*useNewUrlParser allows users to fall back to the old parser if they find a bug in the new parser.*/
/*Unified Topology allows you to see and visualize all of the health details of your network in a single pane.*/
mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser:true , useUnifiedTopology: true
})



/*app.set() function assigns or sets a setting name to value.*/
app.set("view engine","ejs")



//For proper execution of line 36, we need to execute this line.
app.use(express.urlencoded({extended: false}))



/*The res.render() function is used to render a view and sends the rendered HTML string to the client.*/
app.get("/", async (req,res) =>{
    const shortUrls = await ShortUrl.find()
    res.render("index", {shortUrls: shortUrls})  
})



//async means asynchronous as all this happens in background and we'll wait until all this gets finished. Also, we'll use await keyword so that we'll wait until the creation of URL is finished.
app.post("/shortUrls", async (req,res) =>{
    await ShortUrl.create({full: req.body.fullUrl})
    res.redirect('/')
})



app.get('/:shortUrl', async (req,res) => {
    const shortUrl = await ShortUrl.findOne({short: req.params.shortUrl})
    if (shortUrl == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})




app.listen(process.env.PORT || 5000);/*process. env is a reference to the system environment variables. 
PORT means the application expects an environment variable named “PORT” to be set. */
