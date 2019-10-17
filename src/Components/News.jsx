import React, {Component} from "react"
import Cards, { CardsFull } from "./Cards"
import NewsNav from "./newsNavs"
import {connect} from "react-redux"

const mapStateToProps = reduxStore => {
    return reduxStore;
  };
  

 class News extends Component{
        state={
            newGame:[]            
        }

        componentDidUpdate= () =>{
            if(this.state.newGame.length <= 0){
                this.setState({newGame: this.props.gameList})
            }
        }

    render(){
        return(
                <>
                <div className="container d-block mb-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 news-col">
                            <div className="custom-cont w-100">
                            {this.props.gameList.length > 0 && 
                        <CardsFull bgImg={this.props.gameList[4].src}
                                        title={this.props.gameList[4].title}
                                        description={this.props.gameList[4].description}
                                        price={this.props.gameList[4].price}
                            />  
                        }
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex">
                        <div className="container w-100">
                            <div className="row">
                            {this.props.gameList.length > 0 && 
                                 this.props.gameList.filter(
                                     game => game.keySearch == this.props.filter
                                 ).slice(0,5).map(game =>{
                                    return(
                                     <div key={game._id} className="col-sm-12 col-md-6">
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
    }
}

export default connect(
    mapStateToProps,
  )(News);