import mongoose from "mongoose";
import { serializeInteger } from "whatwg-url";
const {Schema, model} = mongoose; 



const contactSchema = new Schema ({
    
    FirstName: String,
    LastName: String,
    Email: String,
    PetAge:Number,
    PetType:String,
})


const ContactForm = model("Contact Form", contactSchema)

export default ContactForm;
