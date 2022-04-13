import React from "react";
import { Tile } from "../../components/tile/Tile";



export function TileList(props) {
const {tiles}= props

  return (
       <div>
         {console.log(tiles)}
         {tiles.map((tile, index)=>(
           <Tile key={index} tile= {tile}/>
         ))}
       </div>
  );
};
