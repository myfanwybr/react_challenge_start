import React from "react";

export const ContactPicker = ({
  handleTitleChange,
  handleDateChange,
  handleTimeChange,
  handleContactChange,
  contacts

}) => {
  return (
    <select onChange={handleContactChange}>
      <option value= 'default'>None selected</option>
      {contacts.map((contact)=> (
        <option 
        key={contact.name} 
        >{contact.name}</option>
        
      ))}
    
    </select>
  );
};
