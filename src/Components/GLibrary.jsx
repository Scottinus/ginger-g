import React, {Component} from "react"
import "../stylesheets/GLibrary.css"
export default class GLibrary extends Component{


render(){
    return(
        <div className="card card-image" style={{backgroungImage: 'url("https://images3.alphacoders.com/693/693872.jpg")'}}>

  <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
    <div>
      <h5 className="green-text"><i className="fas fa-money-bill-alt"></i> G-Library System</h5>
      <h3 className="card-title pt-2"><strong>Sell your game's Library</strong></h3>
      <p>Are you tired about gaming? There is a game that you don't want to have anymore in your library? No worries,
        GingerGames offer an exclusive system with our <strong>G-Library</strong> you can <strong>sell your games to other players</strong> to buy something else in our store!</p>
      <a href="#" className="btn btn-green mt-3"><i className="fas fa-clone left"></i> More Info</a>
    </div>
  </div>
    
</div>
    )
}

}