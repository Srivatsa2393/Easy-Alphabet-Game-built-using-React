import React ,{ Component } from 'react';
import alphabets from './alphabets.json';
import classNames from 'classnames';


class EasyABC extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      alphabets: alphabets,
      //a currentposition to determine the alphabet
      currentPosition: 0,
      //currentTick as another counter
      currentTick: 0
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  //we would like to play the sound as soon as page loads
  componentDidMount(){
    let letterSound = document.querySelector(`audio[data-key="letter"]`);
    //let wordSound = document.querySelector(`audio[data-key="word"]`);
    //console.log(letterSound);
    if(this.state.currentPosition === 0){
      letterSound.play();
    }
  }
  componentDidUpdate(){
    this.playSound();
  }

  playSound(){
    let letterSound = document.querySelector(`audio[data-key="letter"]`);
    let wordSound = document.querySelector(`audio[data-key="word"]`);
    console.log('play sound');

    if(this.state.currentTick === 0){
      letterSound.currentTime = 0;
      letterSound.play();
    }else{
      wordSound.currentTime = 0;
      wordSound.play();
    }
  }

  next (){
    //console.log('next button clicked');
    if(this.state.currentPosition === this.state.alphabets.length - 1){
      if(this.state.currentTick < 2){
        this.setState({currentTick: this.state.currentTick + 1});
      }else{
        this.setState({currentPosition: 0, currentTick: 0});
      }
    }else{
      if(this.state.currentTick < 2){
        this.setState({currentTick: this.state.currentTick + 1});
      }else{
        this.setState({currentPosition: this.state.currentPosition + 1, currentTick: 0})
      }
    }
    //this.playSound();
  }

  prev(){
    //console.log('prev button clicked');
    if(this.state.currentPosition > 0){
      this.setState({currentPosition: this.state.currentPosition - 1});
    }else{
      this.setState({currentPosition: this.state.alphabets.length - 1});
    }
  }

  render (){
    let showImage = this.state.currentTick !== 0 ? true : false;
    //console.log(this.state.currentTick, showImage);

    let showWord = this.state.currentTick === 2 ? true : false;
    //console.log(this.state.currentTick, showWord);
    //console.log(alphabets);
    return(
      <div className="game">
        <div className="option">
          <div className="fields">
            <div className="field-block">
              {this.state.alphabets[this.state.currentPosition].letter}
            </div>
            <audio src={this.state.alphabets[this.state.currentPosition].letterSound}
              data-key="letter" />
          </div>
          Current Position: {this.state.currentPosition}<br/>
          Current Tick: {this.state.currentTick}
          <div className="buttons">
            <a className="button prev" onClick={this.prev}>Previous</a>
            <a className="button sound" onClick={this.playSound}>Play Sound Again</a>
            <a className="button next" onClick={this.next}>Next</a>
          </div>
          <div className="fields">
            <div className="field-block">
              <div className="left-field">
                <div className={classNames('placeholder-span', {hide: showImage})}>Click Next to View the Image</div>
                <img className = {classNames('letter-image', {hide: !showImage})}
                  alt={this.state.alphabets[this.state.currentPosition].word}
                  src={this.state.alphabets[this.state.currentPosition].image} />
                <audio src={this.state.alphabets[this.state.currentPosition].wordSound}
                    data-key="word" />
              </div>
              <div className="right-field">
                <div className={classNames('placeholder-span', {hide: showWord})}>Click Next to View the Alphabet</div>
                <div className={classNames('word', {hide: !showWord})}>
                  {this.state.alphabets[this.state.currentPosition].word.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EasyABC;
