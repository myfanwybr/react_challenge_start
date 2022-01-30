import React from "react";


export function TileList(props) {
const {contact}= props

  return (
       <li className='Contact'>
         <div className='name'>
           {contact.name}
         </div>
        </li>
  );
};
