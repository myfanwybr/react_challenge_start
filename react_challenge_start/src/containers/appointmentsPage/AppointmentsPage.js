import React, {useState, useEffect} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import {Tile} from "../../components/tile/Tile"

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle]= useState('')
  const [contact, setContact]= useState('')
  const [date, setDate]= useState('')
  const [time, setTime]= useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value)}

  const handleDateChange = (event) =>{
      setDate(event.target.value)}
 
  const handleTimeChange = (event) => {
        setTime(event.target.value)}

  const handleContactChange = (event) => {
    setContact(event.target.value)}




  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={title}
        contact={contact}
        contacts={contacts}
        date= {date}
        time= {time}
        handleSubmit={handleSubmit} 
        handleTitleChange={handleTitleChange} 
        handleContactChange={handleContactChange} 
        handleDateChange={handleDateChange}
        handleTimeChange={handleTimeChange}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
