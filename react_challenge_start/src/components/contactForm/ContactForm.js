import React from "react";

export function ContactForm(props) {


  const {
    name, 
    phone,
    email, 
    handleSubmit, 
    handleNameChange, 
    handlePhoneChange, 
    handleEmailChange}= props

  

  return (
    <form className='ContactForm' onSubmit={handleSubmit}>
        <input 
          type='text'
          value={name}
          onChange={handleNameChange}/>
        <input
          type='text'
          value={phone}
          pattern= "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          onChange={handlePhoneChange}/>
         <input
          type='text'
          value={email}
          onChange={handleEmailChange}/>
        <input type='submit' value='Add'/> 
    </form>
  );
};
