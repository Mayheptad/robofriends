import React from 'react';
import Card from './Card';

function CardList ({robots}){
 //if(1){throw new Error('fuck')}
    return (
 robots.map(eachRobot => 
   <Card key={eachRobot.id} src={`https://robohash.org/${eachRobot.id}?size=200x200`} name={eachRobot.name} email={eachRobot.email}/>)
   )
     }

export default CardList;