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
      fontSize: 12
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);

  }

  onSetColor(params){
    this.setState({
      color: params
    })
  }

  onChangeSize(value){
    if ( this.state.fontSize + value >= 8 && this.state.fontSize + value <=36 ) {
      this.setState({
        fontSize: this.state.fontSize + value
      })
    }
  }

  onSettingDefault(value){
      if (value) {
        this.setState({
          color: 'red',
          fontSize: 12
        })
      }
  }
  render() {
  
    return (
      <div className="container mt-50">
        <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
            <div className="col-6 border text-center pb-3">
                <SizeSetting 
                fontSize={this.state.fontSize}
                onChangeSize={this.onChangeSize}
                />
                <Reset onSettingDefault={this.onSettingDefault}/>
            </div>
            <Result color={this.state.color} fontSize={this.state.fontSize}/>
        </div>
      </div>
    );
  } 
}

export default App;
