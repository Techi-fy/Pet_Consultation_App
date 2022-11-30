import mongoose from "mongoose";
const {Schema, model} = mongoose; 



const contactSchema = new Schema ({
    
    FirstName: String,
    LastName: String,
    
})

const ContactForm = model("Contact Form", contactSchema)

export default ContactForm;