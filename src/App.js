
import './App.css';

import React, {Component} from 'react';
class App extends Component{
//setting the initial state
  constructor(props){
    super(props);
    this.state={
      task:"",
      list:[]
    }
  }

  //setting user input value
  updateTask(value){
    this.setState({
      task:value
    })
  }

  //adding item
  addTask(){
      if(this.state.task !==''){
      
      const task={
        id: Math.random(),
        value:this.state.task

      };
      //updating the list
      const list=[...this.state.list];
      list.push(task);

      //resetting the state
      this.setState({
        list,
        task:""
      })
    }
  }
  //deleting items using item id
  deleteTask(key){
    const list=[...this.state.list]
    //filtering the list to remove items
    const updateList=list.filter(item=> item.id!=key);
    this.setState({
      list:updateList
    });
  }
  render(){
    return(
      <div className="container">
      <form className="form">
        <input type="text" placeholder="Write a task.." value={this.state.task} onChange={item=>this.updateTask(item.target.value)} className="input"></input>
        <button onClick={()=>this.addTask()} disabled={!this.state.task.length} className="addButton"> Add</button>
        <br></br>
        <ul className="list">
          {this.state.list.map(item=>{
            return(
              <li key={item.id} className="item">{item.value}
              <button onClick={()=>this.deleteTask(item.id)} className="deleteButton"> X</button></li>
            )
          })}
        </ul>
      </form>
      </div>
    )
  }
}
export default App;