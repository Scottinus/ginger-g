import React from 'react';
import { Fade } from 'reactstrap';
import Multicar from './multiCarousel';
import "../stylesheets/Popsover.css"



export default class PopsOver extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hover: false
        }
    }

    hoverBtn=() =>{
          if(this.state.hover === false){
      this.setState({hover: true})
    }else {
      this.setState({hover: false})
    } 
    }
    hoverOff=() =>{
        this.setState({hover: false})
    }
    render() {
        return (
            <div>
                   <button className={this.state.hover==true ? "btn d-none" : "d-block btn"} onClick={this.hoverBtn} id="fade-btn">Browse</button>
                <Fade className={this.state.hover ? "animated fadeInUp cust-fade mr-2"  : "animated fadeOutDown faster cust-fade"}
                onMouseEnter={this.hoverOn}
                 onMouseLeave={this.hoverOff} 
                 id={this.props.id}
                 imgArray={this.props.imgArray}
                >
                    <div className= "fade-item container-fluid" >
                        <div className="row">
                            <div className="col text-center">
                             <h2>{this.props.title}
                            </h2>
                             <Multicar id={this.props.id}
                                        imgArray={this.props.imgArray}
                             />
                             <p className="text-left mt-3">{this.props.description} ...</p>
                            </div>
                        </div>
                        <div className="text-center">
                <button className="btn btn-green">Add to Cart</button>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};
