import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  handleTitleChange,
  handleDateChange,
  handleTimeChange,
 handleContactChange
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };


  
  console.log(contacts)

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
      placeholder= 'title'
      type= 'text'
      value={title}
      onChange= {handleTitleChange}/>
      <input
       placeholder= 'date'
       type= 'date'
       min={getTodayString()}
       value={date}
       onChange={handleDateChange}/>

      <input
       placeholder= 'time'
       type= 'time'
       value={time}
       onChange={handleDateChange}/>

       <ContactPicker 
       contacts={contacts}
       handleContactChange={handleContactChange}
      />

       <input type= "submit" value="Add Appointment"/>
    </form>
    </div>
  );
};
