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

        <img src={this.props.cardImg} className="img-fluid" height="500px"/>
        <div className=" cust-cont-card m-2">
          <p><strong>{this.props.title1}</strong></p>
          <div className="float-right m-1 d-flex card-text">
            <p className="card-price pl-2 pr-2"><strong>10%</strong></p>
            <p className="mt-2 ml-2"><strong>{this.props.price1}</strong></p>
            <i className={this.state.hover ? "d-flex fas fa-shopping-cart right mt-2 ml-1" : "d-none fas fa-shopping-cart right"} />
          </div> 
        </div>
          </div>
        </div>

     

    );
  };
}

export  class CardsFull extends React.Component{

  render(){
    return(
      <div className="card card-image" style={{backgroundImage: `url(${this.props.bgImg})`}}>
  <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 h-100">
    <div>
      <h3 className="green-text"><i className="fas fa-chart-pie"></i> {this.props.title}</h3>
      <p>{this.props.description}</p>
      <h3 className="green-text">{this.props.price}</h3>
      <a className="btn btn-green"><i className="fas fa-shopping-cart left"></i> Add to Cart</a>
    </div>
  </div>

</div>
    )
  }
}
