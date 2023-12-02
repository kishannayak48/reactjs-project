import { Margarine } from "next/font/google";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function StudInfo(props){
  const {sData}=props;
    
    return (

     <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://e1.pxfuel.com/desktop-wallpaper/655/375/desktop-wallpaper-121-whatsapp-dp-boy-stylish-boy-dp.jpg" 
        height={100}
        width={100}/>
  
        <Card.Body>
        <Card.Text>
            {sData.id}
          </Card.Text>
          <Card.Title>{sData.name}</Card.Title>
          <Card.Title>{sData.mobil}</Card.Title>
          <Card.Title>{sData.languages}</Card.Title>

         
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> 
    )

} 

export default StudInfo;