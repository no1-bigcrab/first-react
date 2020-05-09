import React, { Component } from 'react';
import ColorPicker from './components/ColorPickerComponent';
import Reset from './components/ResetComponent';
import Result from './components/ResultComponent';
import SizeSetting from './components/SizeSettingComponent';

import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
      color: 'red',
      fontSize: 15
    };
    this.onSetColor = this.onSetColor.bind(this);
  }
  onSetColor(params){
    this.setState({
      color: params
    })
  }
  render() {
  
    return (
      <div className="container mt-50">
        <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
            <div className="col-6 border text-center pb-3">
                <SizeSetting />
                <Reset />
            </div>
            <Result color={this.state.color}/>
        </div>
      </div>
    );
  } 
}

export default App;
