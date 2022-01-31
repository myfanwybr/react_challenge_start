import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export function ContactsPage(props) {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const {contacts, addContact}= props

 const [name, setName]=useState('')
 const [phone, setPhone]= useState('')
 const [email, setEmail]= useState('')
 const [duplicate, setDuplicate]= useState(false)

 const handleNameChange = (event) =>{
  setName(event.target.value)}

useEffect(()=>{
    if (contacts.includes(name)){
      setDuplicate(true)
    }
  }, [contacts, name])


const handlePhoneChange = (event) =>{
  setPhone(event.target.value)
}

const handleEmailChange = (event) =>{
 setEmail(event.target.value)}


const handleSubmit = (event) => {
    event.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   const contact = {
     name: name, 
     phone: phone, 
     email: email
   };

    props.addContact(contact)
        setName('')
        setPhone('')
        setEmail('') 
      
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  // */
  
}

  return (
    <div >
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        onSubmit={handleSubmit} 
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
        <TileList contacts={contacts}/>
        
      </section>
    </div>
  );
};