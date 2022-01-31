import React from "react";
import { Tile } from "../../components/tile/Tile";



export function TileList(props) {
const {contacts}= props

  return (
       <div>
         <Tile contacts= {contacts}/>
       </div>
  );
};
