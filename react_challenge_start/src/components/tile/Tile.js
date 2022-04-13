import React from "react";

export function Tile (props) {
  const {tile} =props
  return (
    <div className="tile-container">
        {Object.values(tile).map((value, index)=> (
          <p key={index} className={'${index === 0 ? "tile-title" : ""} tile'}>
            {value}
          </p>
        ))}
    </div>
  );
};
