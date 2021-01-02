import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       textarea : ' ',
       todoArray :[]
    }
    this.changeHandler =this.changeHandler.bind(this);
    this.submitHandler =this.submitHandler.bind(this);
    this.delete = this.delete.bind(this);
  }
  
  submitHandler(event) {
event.preventDefault();
const textainput = this.state.textarea.split(',');
console.log(textainput)
  const newItem = {

    id: Math.random() >= 10000,
    Item : textainput
  }


this.setState({
   
  ...this.state.todoArray,
  todoArray :  [...this.state.todoArray , newItem.Item ],
  textarea : ' '
}) ;

// console.log("surya")
// console.log(this.state.todoArray)

  }

  changeHandler(event) {

    this.setState ( {
 textarea : event.target.value
    })
  }


  delete (data) {

const filterdata = this.state.todoArray.filter(a => a.id!=data.id)
console.log(filterdata)
this.setState({
...this.state.todoArray,

todoArray : filterdata 
})

  }

  render() {
      //  const {textarea}=this.state
         
    return (
      
      <div className ="App">
        
  <div>
  <h2>Todo App</h2> { }
  </div>
      

         <form onSubmit={this.submitHandler}>
         
         <input  
         onChange ={this.changeHandler}
         value={this.state.textarea}
         />

         <input    type ="submit"  name ="AddTo"  value ="AddItem" />
         </form>

<div>


<ul>
{ this.state.todoArray.map( data => 
  
  <li key={data.id}>
   {data} <button onClick ={ ()=> this.delete(data.id)}>X</button>
   </li>)}

</ul>
</div>
         
      </div>
    )
  }
}

