import React, {Component} from "react"
import {connect} from "react-redux"
import Loader from 'react-loader-spinner'

const mapStateToProps = reduxStore => {
    return reduxStore;
  };

const mapDispatchToProps = dispatch => ({
        toggleSpinner:() =>
        dispatch({
            type: "TOGGLE_SPINNER"
        }),
        showAlert:() =>
        dispatch({
            type:"SHOW_ALERT"
        }),
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
                console.log(result)
        }else{
            alert("Product NOT GET Successfully");
        }
        dispatch({
            type:"STORE_DATA",
            payload: result
        })
    }
}

class MainTest extends Component{
        constructor(props) {
            super(props);
            this.state = {
                        
            }
        }

        componentDidMount = async () =>{  
            await this.props.fetchData();
            console.log(this.props.gameList)
        }

    render() {
        return(
            <div className="container-fluid">
      <h1>Loading Complete</h1>      
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainTest);