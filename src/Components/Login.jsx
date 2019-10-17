import React, {Component} from "react"
import "../stylesheets/login.css"
import SimpleNavBar from "./SimbleNav"

class LoginPage extends Component{

    render(){
        return(
          <>
          <SimpleNavBar/>
          <div className="image-r">
            <img src="https://i.pinimg.com/originals/0a/4f/6c/0a4f6c783dcc0e048b5de17d419174e7.png" alt="login-img"/>
         </div>
           <div className="image-l">
            <img src="https://png2.kisspng.com/sh/c7b626dc05b81750dc61404838fd8c7d/L0KzQYm3VcE4N5N5j5H0aYP2gLBuTfZqdpJxRdhqboTkg8q0lvlqNaNqhdN0ZT33ebfoTfxwa5xteeR9LXPvf8brTgN1epprRadqZnS1QrbqUvI1OmQ2Rqg6N0W0QYm7UcUzPmY4UKsDOEG6R4O1kP5o/kisspng-final-fantasy-vii-remake-tifa-lockhart-cloud-strif-5afd22ec2b4231.6175118415265389881772.png" alt="login-img"/>
         </div>  
         
            <div className="login-container">

<section class="form-gradient">

<div class="card">

  
  <div class="header pt-3 custom-gradient">

    <div class="row d-flex justify-content-center">
      <h3 class="white-text mb-3 pt-3 font-weight-bold">Log in</h3>
    </div>

    <div class="row mt-2 mb-3 d-flex justify-content-center">
          <a class="fa-lg p-2 m-2 fb-ic"><i class="fab fa-facebook-f white-text fa-lg"> </i></a>
   
      <a class="fa-lg p-2 m-2 tw-ic"><i class="fab fa-twitter white-text fa-lg"> </i></a>

      <a class="fa-lg p-2 m-2 gplus-ic"><i class="fab fa-google-plus-g white-text fa-lg"> </i></a>
    </div>

  </div>


  <div class="card-body mx-4 mt-4">

   
    <div class="md-form">
      <input type="text" id="Form-email3" class="form-control"/>
      <label for="Form-email3">Your email</label>
    </div>

    <div class="md-form pb-1 pb-md-3">
      <input type="password" id="Form-pass3" class="form-control"/>
      <label for="Form-pass3">Your password</label>
      <p class="font-small grey-text d-flex justify-content-end">Forgot <a href="#"
          class="dark-grey-text ml-1 font-weight-bold"> Password?</a></p>
    </div>

    <div class="row d-flex align-items-center mb-4">


      <div class="col-md-1 col-md-5 d-flex align-items-start">
        <div class="text-center">
          <button type="button" class="btn btn-grey btn-rounded z-depth-1a">Log in</button>
        </div>
      </div>
 

  
      <div class="col-md-7">
        <p class="font-small grey-text d-flex justify-content-end mt-3">Don't have an account? <a href="#"
            class="dark-grey-text ml-1 font-weight-bold"> Sign up</a></p>
      </div>


    </div>

  </div>

</div>

</section>
            </div>
            </>

        )
    }
}

export default LoginPage