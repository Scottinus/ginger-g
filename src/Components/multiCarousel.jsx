import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 import React, {Component} from 'react';
 import images from '../jsonFolder/multiCar.json'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default class Multicar extends Component{
    constructor(props){
        super(props);
        this.state={
            imgArray: [],
            objimg:[]
        }
    }
    componentDidMount= async() =>{
        console.log(this.props.id)
        await this.setState({imgArray : images})
        await this.setState({imgArray : this.state.imgArray[0]})
        await console.log(this.state.imgArray)
        switch(this.props.id){
            case 1:     this.setState({imgArray : this.state.imgArray.first})
            console.log(this.state.imgArray)
            break;
            case 2:     this.setState({imgArray : this.state.imgArray.second})
            console.log(this.state.imgArray)
            break;
            case 3:  this.setState({imgArray : this.state.imgArray.third})
            console.log(this.state.imgArray) 
        }
    
}
    render(){
        return(

<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  id={this.props.id}
>
  <div>
      <img src={this.state.imgArray[0]} className="img-fluid" width="300px"/>
  </div>
  <div>
      <img src={this.state.imgArray[1]} className="img-fluid" width="300px"/>
  </div>
  <div>
      <img src={this.state.imgArray[2]} className="img-fluid" width="300px"/>
  </div>
</Carousel>
        )
    }
}