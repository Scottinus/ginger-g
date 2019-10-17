import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 import React, {Component} from 'react';
 import images from '../jsonFolder/multiCar.json'
import PopsOver from "./popsover.jsx";
import "../stylesheets/BigCarousel.css"
import {connect} from "react-redux"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const mapStateToProps = reduxStore => {
  console.log(reduxStore)
  return reduxStore;
};

 class Multic extends Component{
    constructor(props){
        super(props);
        this.state={
            imgArray: [],
            objimg:[]
        }
    }
    componentDidMount= async() =>{
      console.log(window.outerWidth)
        await this.setState({imgArray : images})
        await this.setState({imgArray : this.state.imgArray[0]})
        switch(this.props.id){
            case 1:     this.setState({imgArray : this.state.imgArray.first})
        
            break;
            case 2:     this.setState({imgArray : this.state.imgArray.second})
   
            break;
            case 3:  this.setState({imgArray : this.state.imgArray.third})
       
        }
    
}

    render(){
        return(

<Carousel
 additionalTransfrom={0}
 arrows
 autoPlay={true}
 autoPlaySpeed={10000}
 centerMode={window.outerWidth >= "1024" ? true : false}
 containerClass="container-fluid"
 dotListClass="d-none"
 draggable={false}
 focusOnSelect={true}
 infinite
 itemClass="mb-3 h-100"
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
     partialVisibilityGutter: 40,
   },
   mobile: {
     breakpoint: {
       max: 464,
       min: 0
     },
     items: 1,
     partialVisibilityGutter: 40
   },
   tablet: {
     breakpoint: {
       max: 1024,
       min: 464
     },
     items: 1,
     partialVisibilityGutter:40
   }
 }}
 showDots={true}
 sliderClass=""
 slidesToSlide={1}
 swipeable
>
{this.props.gameList.map(games =>{
  return(
  <div key={games._id} className="">
      <img src={games.src} className="car-img" alt={games.title} />
      <PopsOver 
      id={games._id}
      title={games.title}
      description={games.description.slice(0,500)}
      imgArray={games.detailSrc}
      />
  </div>
  )
})}

</Carousel>
        )
    }
}

export default connect(
  mapStateToProps,
)(Multic);