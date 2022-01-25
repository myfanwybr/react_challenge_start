import React, {useState} from "react";
import { TileList } from "../../components/tileList/TileList";

export function ContactsPage (props) {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const {addContact, contacts}= props

 const [name, setName]=useState('')
 const [phoneNumber, setPhoneNumber]= useState('')
 const [email, setEmail]= useState('')

 const handleNameChange = (event) =>{
   setName(event.target.value)
 }
 
 const handleNumberChange = (event) =>(
   setPhoneNumber(event.target.value)
 )

 const handleEmailChange = (event) =>(
  setEmail(event.target.value)
)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   const contact = {
     name: name, 
     phoneNumber: phoneNumber, 
     email: email
   }

   if (contact.name in contacts){
     window.alert('Contact Already Exists')
   }
   else props.addContact(contact)

   setName('')
   setPhoneNumber('')
   setEmail('')
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div >
      <section>
        <h2>Add Contact</h2>
        <form className='ContactsPage' onSubmit={handleSubmit}>
          <input 
          type='text'
          value={name}
          onChange={handleNameChange}/>
          <input
          type='text'
          value={phoneNumber}
          onChange={handleNumberChange}/>
          <input
          type='text'
          value={email}
          onChange={handleEmailChange}/>
          <input type='submit' value='Add'/> 
          </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <ul className='thoughts'>
          {contacts.map((contact)=>
          (<TileList/>))}
        </ul>
      </section>
    </div>
  );
};
