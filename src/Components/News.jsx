import React, {Component} from "react"
import Cards from "./Cards"

export default class News extends Component{


    render(){
        return(
                <>
                <div className="container d-block mb-4">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 news-col">
                            <div className="custom-cont">
                            <Cards/>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 d-flex">
                        <div className="container w-100">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                            <Cards/>
                                </div>
                                <div className="col-sm-12 col-md-6">
                            <Cards/>
                                </div>
                                <div className="col-sm-12 col-md-6">
                            <Cards/>
                                </div>
                                <div className="col-sm-12 col-md-6">
                            <Cards/>
                                </div>
                            </div>
                           
                        </div>
                        </div>
                    </div>
                </div>
                </>

        )
    }
}