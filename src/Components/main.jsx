import React, {Component} from "react"
import NavBar from "./Navbar"
import Multic from "./bigCarousel"
import News from "./News"
import WeekSale from "./WeeklySale"

export default class Main extends Component{

    render(){
        return(
            <>
            <NavBar/>
            <div className="container mt-5">
                <div className="row banner">
                    <div className="col-12 text-center mt-4 mb-4">
                        <a href="">
                            <img src="https://smart.com.ph/Prepaid/images/default-source/default-album/giga-games-149-web-banner-1920-x-575px.jpg?sfvrsn=0" className="img-fluid animated fadeIn" alt="Responsive image"/>
                        </a>
                    </div>
                </div>
                <h4>Highlights</h4>
                <hr/>        
            </div>
            <div className="w-100 mb-5">
                <Multic/>
            </div>
            <hr/> 
            <WeekSale/>
            <hr/> 
            <div className="mt-4">
            <h4>NEWS</h4>
            <News/>

            </div>
            </>
        )
    }
}