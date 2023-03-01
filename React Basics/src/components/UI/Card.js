import React from "react";
import '../UI/Card.css';

const Card = (props) =>
{
    const classes = 'card '+ props.className; //it will come from ExpnsesItem ,here we combine string of 
                                               // two classes for css style
 return <div className={classes}>{props.children}</div>
}
export default Card;