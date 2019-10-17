import React, {Component} from "react"

export default class Footer extends Component{

    render(){
        return(
        <div className="footer">
            <p>all Copyright reserved to the products <br/>
            This WebApp is just a Test, for this motivation it will not sell anything.<br/>
            If you want to learn more about me, check the links below
            </p>
           <a href=""><i className="fab fa-github fa-2x mr-3"></i></a>
            <a href="https://www.linkedin.com/in/luca-sorace-772004178" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
        </div>
        )
    }
}