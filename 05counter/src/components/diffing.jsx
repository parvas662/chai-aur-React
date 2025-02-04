import React, { useState } from "react";

function ItemList() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
  
  const updateList = () => {
    // Changing the items to a new array reference 
    setItems(["Banana", "Apple", "Cherry"]); // Order change
  };

  return (
    <div>
      <ul> 
        {items.map((item) => (  // writing jsx inside of this map function.
          <li key={item}>{item}</li>   
        ))}
    
      </ul>
      <button onClick={updateList}>Change Order</button>
    </div>
  );
}

export default ItemList;
