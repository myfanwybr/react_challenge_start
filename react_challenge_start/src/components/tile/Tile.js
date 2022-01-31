import React from "react";

export function Tile (props) {
  const {contacts} =props
  return (
    <div className="tile-container">
        {contacts.map((contact, i)=>
           
           <p key= {i}>{contact}</p>
          
           )}
    </div>
  );
};
