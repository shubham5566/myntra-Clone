import React from 'react'
import {Card, Badge,Button} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../../store/bagSlice';
import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin4Fill } from "react-icons/ri";
function HomeItem({item}) {
  const dispatch= useDispatch();
const bagItems = useSelector((store)=> store.bag);
const elementFound = bagItems.indexOf(item.id) >=0 ;

  const handleAddToBag = ()=>{
    dispatch(bagActions.addToBag(item.id))
  }
  const handleRemoveToBag =()=>{
    dispatch(bagActions.removeFromBag(item.id))
  }
  
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} alt={item.item_name} />
        <Card.Body>
          <Card.Title>{item.item_name}</Card.Title>
          <Card.Text>{item.company}</Card.Text>
          <Card.Text className="text-muted">
            <p>Actual Price: {item.original_price}</p>
            <p> Discounted Price:{item.current_price}</p>
            <p>  Discount: {item.discount_percentage}%</p>

            
          </Card.Text>
          
         {
          elementFound ?
          <Button  className= "w-100" variant='danger' onClick = {handleRemoveToBag}><RiDeleteBin4Fill />{" "} Remove From Bag </Button>  :
          <Button  className= "w-100" variant='success' onClick = {handleAddToBag}> 
          <IoMdAddCircle />
          {" "}
          Add to Bag
           </Button>
            
         }
          
         
        </Card.Body>
      </Card>
    </>
  );
}

export default HomeItem



