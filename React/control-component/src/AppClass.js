import React, { Component } from 'react';
import Input from './Input';
import './App.css';


export default class AppClass extends Component {
    constructor(props){
        super(props);

        this.state ={
            todo: ""
        }
    }
    handelInputChange = (e)=>{
        this.setState({
            todo: e.target.value,

        })
    }
    handelSubmit = (e)=>{
        e.preventDefault();
        alert(`the task is : ${this.state.todo}`);

    }
    isValid = ()=>{
        if(this.state.todo ===''){
            return false;
        }
        return true;
    }
    render() {
        return (
            <div className="App">
              <h2>  Controlled Component with react</h2>
              <form onSubmit={this.handelSubmit}>
                
                <Input onChange={this.handelInputChange} id="todo" 
                errorMessage={this.isValid() ? '' : 'This field is required'}
                placeholder="write some text"  type="text" value = {this.state.todo} />
                {/* <Input type="submit" value="Submit the form"  /> */}
               <div className="form-group">
               <button className="btn btn-success" disabled={!this.isValid()} type="submit" >Submit </button>
               </div>
                
              </form>  
            </div>
        )
    }
}
