import { Component } from "react";
class ClassComponent extends Component{
    render() {
        return(
            <div className='Class-Container'>
            <h2>This is created using Class Component</h2>
            <p className='external'>This is done using external CSS</p>
            <p style={{color: 'blue', fontWeight:'bold'}}>This is done using inline CSS</p> 
            </div>
        )
    }
}
export {ClassComponent}
