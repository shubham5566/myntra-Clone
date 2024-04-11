import React from 'react'
import {Card, Badge,Button} from "react-bootstrap"
function HomeItem({item}) {
  
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} alt={item.item_name} />
        <Card.Body>
          <Card.Title>{item.item_name}</Card.Title>
          <Card.Text>{item.company}</Card.Text>
          <Card.Text className="text-muted">
            <Badge variant="danger">Actual Price: {item.original_price}</Badge>

            <br/>
            <Badge variant="primary">
              Discounted Price:{item.current_price}
            </Badge>
            <br/>

            <Badge variant="success">
              Discount: {item.discount_percentage}%
            </Badge>
          </Card.Text>
          <Card.Text className="text-muted">{item.return_period}</Card.Text>
          <Card.Text className="text-muted">{item.delivery_date}</Card.Text>
          
          <Button onClick = {()=>console.log("item added in cart")}> Add to card </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default HomeItem



