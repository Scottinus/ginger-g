import React from 'react';
import { Button, Fade } from 'reactstrap';
import Multicar from './multiCarousel';

export default class Example extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hover: false
        }
    }

    hoverBtn=() =>{
          if(this.state.hover == false){
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
                   <button className="btn btn-green" onClick={this.hoverBtn} id="fade-btn">Browse</button>
                <Fade className={this.state.hover ? "animated fadeInUp cust-fade mr-3 ml-3" : "animated fadeOutDown faster cust-fade"}
                onMouseEnter={this.hoverOn}
                 onMouseLeave={this.hoverOff} 
                 id={this.props.id}
                >
                    <div className= "fade-item container-fluid mt-5" >
                        <div className="row">
                            <div className="col">
                             <h2>{this.props.title}
                            </h2>
                             <Multicar id={this.props.id}/>
                             <h4>Description:</h4>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolor iste exercitationem aut vero fuga.</p>
                            </div>
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
