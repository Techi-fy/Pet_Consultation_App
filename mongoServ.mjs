import mongoose from "mongoose";
import ContactForm from "./model/contact-form.mjs";
import * as dotenv from 'dotenv' 
dotenv.config()
import express, { application, request, response } from 'express'

const app = express();
const port = process.env.PORT || 3000;




mongoose.connect("mongodb+srv://newmatt:123@cluster0.74mjbf8.mongodb.net/petPro?retryWrites=true&w=majority");
/*create a new contact form object*/
let contactusFormHTML = new ContactForm({ 

  FirstName: 'Matt', 
  LastName: 'Land',
  Email:'mattlanderos@gmail.com',
  PetAge:'10',
  PetType:'Cat',
  
})


console.log(contactusFormHTML)

/*check to see if result is desired*/

/*save object to database*/












