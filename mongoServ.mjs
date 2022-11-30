import mongoose from "mongoose";
import ContactForm from "./model/contact-form.mjs";








mongoose.connect("mongodb+srv://newmatt:123@cluster0.74mjbf8.mongodb.net/petPro?retryWrites=true&w=majority");

// create a new contact form object
const contactusForm = new ContactForm({ 

  FirstName: 'Matt', 
  LastName: 'Land',
  
})


const firstArticle = await ContactForm.findOne({})
//check to see if result is desired
console.log(firstArticle);
//save object to database
await contactusForm.save(); 














/*const express = require('express')
const bodyParser = require('body-parser')

var app = express()




const conn = mongoose.createConnection('mongodb+srv://newmatt:12345@cluster0.74mjbf8.mongodb.net/petPro'); 

const notesSchema = {
    title: string,
    content: string

}

const newNote = mongoose.model("Note", notesSchema)

app.use(bodyParser.urlencoded({ extended: false }))
try{
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html')
  })


  app.post("/", function (req, res) {
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content
    
    })
 

  })

  
  app.listen(3000, function(){
    console.log('server running')

  })

}


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

const MyModel = mongoose.model('MyModel', BlogPost)
*/