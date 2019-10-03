import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import JumbCarousel from './jumbotron';
import Example from './popsover';


const items = [
  {
    src: 'http://unrealitymag.com/wp-content/uploads/2016/12/maxresdefault.jpg',
    altText: '14.99$',
    Title: 'The Witcher 3: Wild Hunt - Game of the Year Edition',
    key:1
  },
  {
    src: 'https://www.cyberpunk.net/build/images/social-thumbnail-en-ab9301da.jpg',
    altText: '69.99$',
    Title: 'CYBERPUNK 2077',
    key:2
  },
  {
    src: 'http://gametekk.it/wp-content/uploads/2017/07/Ni-No-Kuni_2.jpghttp://gametekk.it/wp-content/uploads/2017/07/Ni-No-Kuni_2.jpg',
    altText: '49.90$',
    Title: 'NI NO KUNI 2',
    key:3
  }
];

class CarouselMain extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0,
                    hover: false
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        
        >
   
          <img src={item.src} className="car-img" alt="Responsive image" alt={item.altText} /> 
         <div className="container w-100">
         <Example title={item.Title} hover={this.state.hover}
         id={item.key}
         /> 

         </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}          
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" className="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" className="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselMain;