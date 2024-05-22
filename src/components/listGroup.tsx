//import { Fragment } from "react/jsx-runtime";

import { useState } from "react";
interface Props{
    items: string[];
    heading :string;
    onSelectItem: (item: string) => void;
}
function ListGroup({items ,heading,onSelectItem} :Props) {
  // specify both items & heading to have accees to items directly
   const [selectedIndex, setSelectedIndex]=useState(-1)
// 1st param the state variable
// 2nd param is the fuction that changes the state
  
   
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item ,index) => (
          <li
            className={selectedIndex===index ?'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={()=>{setSelectedIndex(index),
                onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
