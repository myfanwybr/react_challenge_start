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
    <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='name'
          value={name}
          onChange={handleNameChange}/>
        <input
          type='tel'
          placeholder='phone'
          value={phone}
          pattern= "[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          onChange={handlePhoneChange}/>
         <input
          type='email'
          placeholder='email'
          value={email}
          onChange={handleEmailChange}/>
        <input type='submit' value='Add Contact'/> 
    </form>
  );
};
