import React from "react";
import BagSummary from "../../componants/bag summary/BagSummary";
import BagItem from "../../componants/BagItem";
import { useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";

function Bag() {
 const bagItems = useSelector(state => state.bag);
  const items = useSelector(state =>state.items);
  const finalItems = items.filter(item =>{
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0 
  })
  return (
    <Card className="mtop ">
<div className="d-flex justify-content-center  gap-2">
      <div >
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
    </Card>
    
  );
}

export default Bag;
