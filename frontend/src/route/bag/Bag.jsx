import React from "react";
import BagSummary from "../../componants/bag summary/BagSummary";
import BagItem from "../../componants/BagItem";
import { useSelector } from "react-redux";

function Bag() {
 const bagItems = useSelector(state => state.bag);
  const items = useSelector(state =>state.items);
  const finalItems = items.filter(item =>{
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0 
  })
  return (
    <div className=" d-flex flex-row justify-content-center gap-4 m-4">
      <div>
        {
          finalItems.map((item)=>(

            <BagItem item={item} />
          ))
        }
      </div>

      <div>
        <BagSummary />
      </div>
    </div>
  );
}

export default Bag;
