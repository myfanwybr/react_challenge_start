import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

 const [name, setName]=useState('')
 const [phone, setPhone]= useState('')
 const [email, setEmail]= useState('')
 const [duplicate, setDuplicate]= useState(false)

 const handleSubmit = (event) => {
  event.preventDefault();
 if (!duplicate){
   addContact(name, phone, email)
      setName('')
      setPhone('')
      setEmail('')
} 
};

useEffect(()=>{
  const nameIsDuplicate= ()=> {
    const found = contacts.find((contact)=> contact.name === name);
    if (found !== undefined) {
      return true;}
    return false
  }
  if (nameIsDuplicate()) {
    setDuplicate(true);
  } else {
    setDuplicate(false)
  }
}, [name, contacts, duplicate])


 const handleNameChange = (event) =>{
  setName(event.target.value)}


const handlePhoneChange = (event) =>{
  setPhone(event.target.value)
}

const handleEmailChange = (event) =>{
 setEmail(event.target.value)}


  return (
    <div >
      <section>
        <h2>Add Contact
          {duplicate ? "Name Already Exists" : ""}
        </h2>
        <ContactForm 
        handleSubmit={handleSubmit} 
        handleNameChange={handleNameChange} 
        handlePhoneChange={handlePhoneChange} 
        handleEmailChange={handleEmailChange}
        name={name}
        phone={phone}
        email={email}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
        
      </section>
    </div>
  );
};