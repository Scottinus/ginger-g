import React, {Component} from "react"
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Main from "./Components/main"
import {Provider} from "react-redux"
import configureStore from "./store";
import LoginPage from "./Components/Login";
  class RouterPage extends Component{

    render(){
        return(
            <Router>
                <Route  exact path="/" render={() => 
                <Provider store={configureStore()}>
                  <Main/>
                  </Provider>
                  }/>
              <Route path="/login" render={() =>
              <LoginPage/>
              }/>
                </Router>
        )
    }
  }
  export default RouterPage;