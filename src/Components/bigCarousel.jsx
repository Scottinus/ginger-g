import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 import React, {Component} from 'react';
 import images from '../jsonFolder/multiCar.json'
import Example from "./popsover.jsx";
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

export default class Multic extends Component{
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
 additionalTransfrom={0}
 arrows
 autoPlaySpeed={3000}
 centerMode={true}
 containerClass="container-fluid"
 dotListClass=""
 draggable={false}
 focusOnSelect={false}
 infinite
 itemClass=""
 keyBoardControl
 minimumTouchDrag={80}
 renderDotsOutside={false}
 responsive={{
   desktop: {
     breakpoint: {
       max: 3000,
       min: 1024
     },
     items: 1,
     partialVisibilityGutter: 40
   },
   mobile: {
     breakpoint: {
       max: 464,
       min: 0
     },
     items: 1,
     partialVisibilityGutter: 30
   },
   tablet: {
     breakpoint: {
       max: 1024,
       min: 464
     },
     items: 1,
     partialVisibilityGutter: 30
   }
 }}
 showDots={false}
 sliderClass=""
 slidesToSlide={1}
 swipeable
>

  <div className="ml-3 mr-3">
      <img src="http://unrealitymag.com/wp-content/uploads/2016/12/maxresdefault.jpg" className="img-fluid car-img" />
      <Example/>
  </div>
  <div className="ml-3 mr-3">
  <img src="https://www.xtrafondos.com/wallpapers/cyberpunk-2077-3187.jpg" className="img-fluid car-img"/>

  <Example/>

  </div>
  <div className="ml-3 mr-3">
  <img src="https://cdn.gearnuke.com/wp-content/uploads/2018/03/ni-no-kuni-2-revenant-kingdom-review-ps4-4.jpg" className="img-fluid car-img"/>
  <Example/>
  </div>


</Carousel>
        )
    }
}