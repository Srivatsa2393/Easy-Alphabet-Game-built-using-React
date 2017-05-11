import React ,{ Component } from 'react';


class EasyABC extends React.Component{
  render (){
    return(
      <div className="game">
        <div className="option">
          <div className="fields">
            <div className="field-block">
              S
            </div>
          </div>
          <div className="buttons">
            <a href="#" className="button prev">Previous</a>
            <a href="#" className="button sound">Play Sound Again</a>
            <a href="#" className="button next">Next</a>
          </div>
          <div className="fields">
            <div className="field-block">
              <div className="left-field">
                S
              </div>
              <div className="right-field">
                Sri
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EasyABC;
