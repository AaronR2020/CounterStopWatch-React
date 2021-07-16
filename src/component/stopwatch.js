import React from 'react';
  class Card_Stopwatch extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              start:false,
              stop:false,
              resume:true,
              hours:0,
              minutes:0,
              seconds:0,
              miliseconds:0,
              t:'',
              total:0,
              totalSeconds:0,
              initialTime:0,
              i:0
            }
      }
      componentWillUnmount(){
        clearInterval(this.state.t);  
      }
      //methods
      
      changeStart=()=>{this.setState({
        start:!this.state.start
      })}
      stop=()=>{
          console.log(this.state.total,'when stoped total seconds');//in seconds
          console.log(this.state.totalSeconds,'total seconds');//in seconds
          
        clearInterval(this.state.t);  
        this.setState({
            i:0,
            total:this.state.totalSeconds
        })
      }
      resume=()=>{
        //resume 
        
        var initialTime = Date.now();

        let t=setInterval(()=>{
            var miliseconds = Date.now() - initialTime              
            var totalSeconds = Math.floor(miliseconds/1000) + this.state.total;


            console.log(Math.floor(this.state.minutes/60),':',Math.floor(totalSeconds/60),":",totalSeconds - this.state.minutes * 60);
            this.setState({
                stop:false,
                start:true,
                minutes: Math.floor(totalSeconds/60),
                hours:Math.floor(this.state.minutes/60),
                seconds:totalSeconds - (this.state.minutes * 60),
                miliseconds:miliseconds<=60?miliseconds:miliseconds%60,
                t:t,
                totalSeconds:totalSeconds
             })

        },100)

      }
      changeStop=()=>{this.setState({
        stop:!this.state.stop
      })}
      reset=()=>{
          clearInterval(this.state.t)
          this.setState({
          start:false,
          stop:false,
          hours:0,
          minutes:0,
          seconds:0,
          miliseconds:0,

      })}

      startWatch=()=>{
        var initialTime = Date.now();
        let t=setInterval(()=>{
            var miliseconds = Date.now() - initialTime;
            var totalSeconds = Math.floor(miliseconds/1000);
            var total=totalSeconds;
            this.setState({
                total:total,
                totalSeconds:totalSeconds,
                minutes: Math.floor(totalSeconds/60),
                hours:Math.floor(this.state.minutes/60),
                seconds:totalSeconds - this.state.minutes * 60,
                miliseconds:miliseconds<=60?miliseconds:miliseconds%60,
                t:t
             })
           

        },100)   
      }
      
      //render
      render() { 
          return ( 
              <>            
            <div className='box'>
             {/*close icon*/}
            <button className='innerX' value='stopWatch' onClick={this.props.change}>X</button>
             {/*close icon*/}
             <div className='content'>
                 {/*Header_card */}
                <h1>Stopwatch</h1>
                 {/*Timer */}
                <h2 className='display_stopwatch'><span className='fixed'>{this.state.hours}</span> : <span className='fixed'>{this.state.minutes}</span> : <span className='fixed'>{this.state.seconds}</span> : <span className='fixed'>{this.state.miliseconds}</span></h2>
                 {/*Button */}
                 {this.state.stop==false?
                 this.state.start==false?<button className='InnerButton' onClick={()=>{this.changeStart();this.startWatch()}}>Start</button>:
                 <button className='InnerButton'onClick={()=>{this.changeStart();this.changeStop();this.stop()}}>Stop</button>:
                 
                 <div className='button_box'>
                 <button className='InnerButton'onClick={this.resume}>Resume</button>
                 <button className='InnerButton' onClick={this.reset}>Reset</button>
                 </div>}
            {}
                
            </div>
            </div>
              </>
           );
      }
  }
   
  export default Card_Stopwatch;