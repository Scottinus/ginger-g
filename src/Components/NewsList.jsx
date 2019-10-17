import React, {useState, useEffect} from "react"
import Cards, { CardsFull } from "./Cards"

import {connect} from "react-redux"

const mapStateToProps = reduxStore => {
    console.log(reduxStore)
    return reduxStore;
  };

 const NewsTest = ({gameList}) => (
    <>
    <div className="container d-block mb-4">
        <div className="row">
            <div className="col-sm-12 col-md-6 news-col">
                <div className="custom-cont w-100">
                {gameList.length > 0 && 
            <CardsFull bgImg={gameList[4].src}
                            title={gameList[4].title}
                            description={gameList[4].description}
                            price={gameList[4].price}
                />  
            }
                </div>
            </div>
            <div className="col-sm-12 col-md-6 d-flex">
            <div className="container w-100">
                <div className="row">
                {gameList.length > 0 && 
                     gameList.slice(0,4).map(game =>{
                        return(
                         <div className="col-sm-12 col-md-6">
                         <Cards cardImg={game.src} title1={game.title.slice(0, 20) + "..."} price1={game.price}/>
                             </div>
                        ) 
                    })
                    } 
                </div>
               
            </div>
            </div>
        </div>
    </div>
    </>

 )

 export default connect(
    mapStateToProps,
  )(NewsTest);
    


