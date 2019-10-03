import React, { Component} from 'react'
import Dropzone from 'react-dropzone'
import { parse } from 'url';

export default class DropZone extends Component{
        constructor(props){
            super(props);
            this.state={
                imgUpload:[],
                postObj: {email: "text@example.com",
                        firstName: "Pipp",
                        lastName: "Paper",
                        password: "abc123"
                    },
                    intArray:[1,2,90,52,60]
            }
        } 
        
        joinArray= () =>{
            var newArr = []
            var combArray = this.perm(this.state.intArray);
            console.log("comb:" , combArray)
            for(var i = 0; i < combArray.length; i ++){
                    var temp = combArray[i]
                        var newJoin = temp.join("")         
                        newArr.push(parseInt(newJoin)) 
            }
                var varTemp = 0;

                console.log(newArr)
                for(var j = 0; j < newArr.length; j++){

                    if(varTemp > newArr[j]){
                  
                    }else{
                            varTemp = newArr[j]
                    }
                
                }
                console.log(varTemp)
                
        }


         perm = a => 
         a.length ? a.reduce((r, v, i) => [ ...r, ...this.perm([ ...a.slice(0, i), ...a.slice(i + 1) ]).map(x => [ v, ...x ])], []) : [[]]
           
        
        onClickHandler= async() =>{ 
                var objToPost = this.state.postObj;
                var response = await fetch("https://cac1ffb6.ngrok.io/users",  {method:"POST",
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(objToPost)
            })
            console.log(await response.json())

            }

        componentDidMount= async() =>{

            var response = await fetch("https://cac1ffb6.ngrok.io/users",  {method:"GET"
        })
         console.log(await response.json())
        }

      render(){
          return (  
<Dropzone onDrop={acceptedFiles =>{
    /* console.log(acceptedFiles) */
    this.setState({imgUpload: acceptedFiles })
    console.log(this.state.imgUpload)
}
}
    >
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div>
          <img src={this.state.imgUpload[0] ? this.state.imgUpload[0].path : "" } className="bg-upload" alt="img"/>
          <button onClick={this.onClickHandler}>Submit</button>
      </div>
        
          <button className="mt-4" onClick={this.joinArray}>Generate</button>
     
    </section>
  )}
</Dropzone>
        )
    }

}