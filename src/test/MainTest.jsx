import React, {Component} from "react"
import DropZone from "./Dropzone"

export default class MainTest extends Component{

    render() {
        return(
            <div className="container-fluid">
                <h1>TEST PAGE</h1>
                <DropZone/>
            </div>
        )
    }
}