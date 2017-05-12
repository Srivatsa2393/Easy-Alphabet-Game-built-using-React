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
  }

  next (){
    console.log('next button clicked');
    if(this.state.currentTick < 2){
      this.setState({currentTick: this.state.currentTick + 1});
    }else{
      this.setState({currentPosition: this.state.currentPosition + 1, currentTick: 0})
    }
  }

  render (){
    let showImage = this.state.currentTick !== 0 ? true : false;
    console.log(this.state.currentTick, showImage);

    let showWord = this.state.currentTick === 2 ? true : false;
    console.log(this.state.currentTick, showWord);
    //console.log(alphabets);
    return(
      <div className="game">
        <div className="option">
          <div className="fields">
            <div className="field-block">
              {this.state.alphabets[this.state.currentPosition].letter}
            </div>
          </div>
          <div className="buttons">
            <a className="button prev">Previous</a>
            <a className="button sound">Play Sound Again</a>
            <a className="button next" onClick={this.next}>Next</a>
          </div>
          <div className="fields">
            <div className="field-block">
              <div className="left-field">
                <div className={classNames('placeholder-span', {hide: showImage})}>Click Next to View the Image</div>
                <img className = {classNames('letter-image', {hide: !showImage})}
                  alt={this.state.alphabets[this.state.currentPosition].word}
                  src={this.state.alphabets[this.state.currentPosition].image} />
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
