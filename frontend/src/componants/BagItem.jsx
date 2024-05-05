import React from 'react'
import { useDispatch } from 'react-redux'
import { bagActions } from '../store/bagSlice'

import { ImCross } from "react-icons/im";
import { Card } from 'react-bootstrap';
function BagItem({item}) {
  const dispatch = useDispatch()
  const handleRemoveFromBag = ()=>{
    dispatch(bagActions.removeFromBag(item.id))
  }
  return (
    <Card className='mt-4 p-4'>
        <div className=" d-flex gap-4 ">
    <div >
      <img  src={item.image}/>
    </div>
    <div className='content-center' >
      <div className="company">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price-container">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount-percentage">{item.discount_percentage}% OFF</span>
      </div>
      <div className="return-period">
        <span className="return-period-days">{item.return_period} days</span> return available
      </div>
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days">{item.delivery_date}</span>
      </div>
    </div>

    <div className='ml-auto' onClick={handleRemoveFromBag}><ImCross /></div>
  </div>
    </Card>
  )
}

export default BagItem