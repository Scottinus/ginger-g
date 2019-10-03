import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "../stylesheets/cards.css"

export default class Cards extends React.Component{
      state={
          hover: false
      }

CheckHover= () =>{
  if(this.state.hover == false)
  this.setState({hover: true})
  else this.setState({hover: false})
}

  render() {
    return (
        <div className="card-col" onMouseEnter={this.CheckHover} onMouseLeave={this.CheckHover}>
          <div className="contr">

        <img src="https://www.xtrafondos.com/wallpapers/cyberpunk-2077-3187.jpg" className="img-fluid"/>
        <div className=" cust-cont-card m-2">
          <p><strong>Cyberpunk</strong></p>
          <div className="float-right m-1 d-flex card-text">
            <p className="card-price pl-2 pr-2"><strong>10%</strong></p>
            <p className="mt-2 ml-2"><strong>$ 59.99</strong></p>
            <img src="https://image.flaticon.com/icons/png/512/126/126083.png" className={this.state.hover ? "d-flex" : "d-none"} alt="cart-icon" width="30px" height="30px"/>
          </div> 
        </div>
          </div>
        </div>

     

    );
  };
}

