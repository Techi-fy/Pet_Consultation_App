const express = require('express');
const app = express()
const path = require('path')
require('dotenv').config() 
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { dirname } = require('path');
var port = process.env.PORT || 3100
var router = express.Router();
app.use(bodyParser.urlencoded({extended:true}))


const contactSchema =({
    
  FirstName: String,
  LastName: String,
  Email: String,
  PetAge:Number,
  PetType:String,
})



const ContactForm =  mongoose.model("Contact Form", contactSchema)

/*Serve Static Files to Client from public directory*/
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/public/index.html")
})

  /*res.sendFile("/"+"public/index.html)")*/



    
app.post('/', (req, res) => {
    let contactusFormHTML1 = new ContactForm({
    FirstName: req.body.FirstName, 
    LastName: req.body.LastName,
    Email:req.body.Email,
    PetAge:req.body.PetAge,
    PetType:req.body.PetType,
  })
  res.send('<h1>SUCCESSFUL</h1>              <a href="/public/index.html" class="navbar-links" id="home-page" style="font-size:1.5rem">Home</a>')
  contactusFormHTML1.save();
  
})





mongoose.connect("mongodb+srv://newmatt:123@cluster0.74mjbf8.mongodb.net/petPro?retryWrites=true&w=majority", {useNewUrlParser:true},{useUnifiedTopology:true});
/*create a new contact form object*/


/*check if server is running*/
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
