import React from 'react';

  class Card_Countdown extends React.Component {
      constructor(props) {
          super(props);
          this.state = { 
              hours:0,
              minutes:0,
              seconds:0,
              start:false,
              stop:false,
              t:'',
           }
      }
      componentWillUnmount(){
        clearInterval(this.state.t);  
      }
    increaseVal=(e)=>{
        var valueName=e.target.value
        this.setState({
            [valueName]:this.state[valueName] + 1,
        }); 
      }

      componentWillUpdate(){
        if(this.state.hours<0||this.state.minutes<0||this.state.seconds<0){
            this.setState({
                hours:0,
                minutes:0,
                seconds:0
            })
        }
    }
    decrease=(e)=>{
        var valueName=e.target.value
        this.setState({
            [valueName]:this.state[valueName] - 1,
        }); 
    }
    changeStop=()=>{this.setState({
        stop:!this.state.stop
      })}
    changeStart=()=>{this.setState({
        start:!this.state.start
      })}
    startWatch=()=>{
        //logic countdown
        this.state.t=setInterval(()=>{
                //refactor
                if(this.state.seconds==0){
                    if(this.state.minutes>0){
                        this.setState({
                            minutes:this.state.minutes-1,
                            seconds:59
                        })                   
                    }
                    else if(this.state.hours>0){
                        this.setState({
                            hours:this.state.hours-1,
                            minutes:59,
                            seconds:59,
                        })
                    }
                }
                else if(this.state.seconds>0){
                   this.setState({
                    seconds:this.state.seconds-1
                   })
                }
                else if(this.state.seconds==0&&this.state.minutes==0&&this.state.hours==0){
                    this.setState({
                        start:false,
                        stop:false
                    })
                }
            
        },1000)
    }
    stop=()=>{
        clearInterval(this.state.t)
    }
    resume=()=>{
        this.setState({
            stop:false,
             start:true
        })
        this.startWatch();
      
    }
    reset=()=>{
        this.setState({
            hours:0,
            minutes:0,
            seconds:0,
            stop:false,
            start:false
        })
    }
    render() { 
          return ( 
              <>             
              <div className='box'>
                  {/*close icon*/}
                    <button className='innerX' value='countDown' onClick={this.props.change}>X</button>
                    <h1>CountDown</h1>

               <div className='Container'>
               <h2 className='display_Counter'><span className='fixed '>Hours</span> : <span className='fixed'>Minutes</span> : <span className='fixed'>Seconds</span></h2>
              
               <div className='display_Counter'>
                   <button className='fixed button_ui' value='hours' onClick={this.increaseVal}>↑</button> : 
                   <button className='fixed button_ui' value='minutes' onClick={this.increaseVal}>↑</button> : 
                   <button className='fixed button_ui' value='seconds' onClick={this.increaseVal}>↑</button>
              </div>
               <div className='display_Counter'>
                   <span className='fixed'>{this.state.hours}</span> : 
                   <span className='fixed'>{this.state.minutes}</span> : 
                   <span className='fixed'>{this.state.seconds}</span>
                </div>

                <div className='display_Counter'>
                   <button className='fixed button_ui' value='hours' onClick={this.decrease}>↓</button> :
                   <button className='fixed button_ui'  value='minutes' onClick={this.decrease}>↓</button> :
                   <button className='fixed button_ui'  value='seconds' onClick={this.decrease}>↓</button>
                </div>

               {/*button for start and stop */}

               </div>
               {this.state.stop==false?
                 this.state.start==false?<button className='InnerButton' onClick={()=>{this.changeStart();this.startWatch()}}>Start</button>://...
                 <button className='InnerButton'onClick={()=>{this.changeStart();this.changeStop();this.stop()}}>Stop</button>://..
                 
                 <div className='button_box'>
                 <button className='InnerButton'onClick={this.resume}>Resume</button>
                 <button className='InnerButton' onClick={this.reset}>Reset</button>
                 </div>}
               </div>
               

              {/*close icon*/}


              </>
           );
      }
  }
   
  export default Card_Countdown;