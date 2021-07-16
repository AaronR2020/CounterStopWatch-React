import './App.css';
import React from 'react';
import Header from './component/header'
import Card_Countdown from './component/counter'
import Card_StopWatch from './component/stopwatch'

class App extends React.Component {

constructor(){
  super();
  this.state={
    countDown:false,
    stopWatch:false
  }
}

change=({target})=>{
let {value}=target;
console.log({value});
this.setState({
[{value}.value]:!this.state[{value}.value]
})
}

render(){
  return(
  <>
  <Header/>
  <div className='Center'>
    {/*Buttons and Logic */}
  {this.state.countDown===false?<button value='countDown' className='button' onClick={this.change}>Show Countdown</button>:<Card_Countdown change={this.change}/>}
   {this.state.stopWatch===false?<button value='stopWatch'  className='button' onClick={this.change}>Show Stopwatch</button>:<Card_StopWatch change={this.change}/>}  
  </div>
  </>
  );
}

}//class ends here

 
export default App;

