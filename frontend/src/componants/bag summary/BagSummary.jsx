import React from 'react'
import { Button, Card, CardBody, CardHeader } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function BagSummary() {
  const bagItemsIds = useSelector((state)=> state.bag)
  const items = useSelector((state)=>state.items)
  const finalItems = items.filter((item)=>{
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0
  })
    const CONVINENCE_FEE = 99;
    let totalItem = bagItemsIds.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    finalItems.forEach((bagItem) => {
      totalMRP += bagItem.original_price;
     
      totalDiscount += bagItem.original_price - bagItem.current_price
      
    });

    let finalPayment = totalMRP - totalDiscount + CONVINENCE_FEE;
  return (
    <Card className='mt-4 p-4'>
     
    <CardHeader>PRICE DETAILS ({bagItemsIds.length} Items) </CardHeader>
    <CardBody>

    <div className='d-flex justify-content-between'  >
      <p >Total MRP</p>
      <p>₹{totalMRP}</p>
    </div>
    <div className='d-flex justify-content-between'  >
      <p >Discount on MRP:-</p>
      <p >₹{totalDiscount}</p>
    </div>
    <div className='d-flex justify-content-between'  >
      <p>Convenience Fee :-</p>
      <p > ₹{CONVINENCE_FEE}</p>
    </div>
    <hr/>
    <div  className='d-flex justify-content-between' >
      <p >Total Amount:-</p>
      <p>₹{finalPayment}</p>
    </div>
    </CardBody>
  
  <Button>
  PLACE ORDER
  </Button>
    </Card>
  )
}

export default BagSummary