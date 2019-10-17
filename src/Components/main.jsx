import React, { Component } from "react";
import NavBar from "./Navbar";
import Multic from "./bigCarousel";
import GLibrary from "./GLibrary";
import Footer from "./Footer";
import Loader from 'react-loader-spinner'
import {connect} from "react-redux"
import NewsNav from "./newsNavs"

const mapStateToProps = reduxStore => {
  console.log(reduxStore)
  return reduxStore;
};

const mapDispatchToProps = dispatch => ({
      fetchData:()=>
      dispatch(handleFetchData())
})

const handleFetchData= () =>{
  return async function(
      dispatch,
      getState
  ){
      var response = await fetch("http://localhost:3450/games",  {method: "GET" });
      if(response.ok){
          console.log("Product GET Successfully");
              var result= await response.json()
      }else{
          alert("Product NOT GET Successfully");
      }
      dispatch({
          type:"STORE_DATA",
          payload: result
      })
  }
}


class Main extends Component {
        state={
            loader: false
        }

      componentWillMount = async () =>{  
          await this.props.fetchData();

      } 
  
  render() {
    return (
      <>
   {/*       <Loader
         className="loader w-100 h-100"
         type="BallTriangle"
         color="green"
         height={100}
         width={100}
         loder={setTimeout(() => {
          this.setState({loader: true})
         }, 3000)}
         timeout={3000} //3 secs
      /> */}
        <NavBar />
      <div className={this.state.loader == true ? "d-none" : "animated fadeIn delay-1s d-block"}>

        <div className="container mt-5">
          <div className="row banner">
            <div className="col-12 text-center mt-4 mb-4">
              <a href="">
                <img
                  src="https://smart.com.ph/Prepaid/images/default-source/default-album/giga-games-149-web-banner-1920-x-575px.jpg?sfvrsn=0"
                  className="img-fluid animated fadeIn"
                  alt="Responsive image"
                />
              </a>
            </div>
          </div>     
          <h4>
          <i className="fas fa-highlighter mr-1"></i>
            Highlights</h4>
          <hr />
        </div>
        <div className="w-100 mb-5">
          <Multic />
        </div>
        <hr />
        <GLibrary />
        <hr />
        <div className="mt-4 container">
          <NewsNav />
     {/*      <NewsTest gameList={this.props.gameList}/> */}
        </div>
        <Footer />
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);