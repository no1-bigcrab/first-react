import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc']
        };
    }
    
    showColor(color){
        return {
            backgroundColor: color,
            height: 300,
            width: 300,
            padding: 7,
            margin: 5
        };
    }
    setActiveBoder(color){
        this.props.onReceiveColor(color);
    }
    render (){
        var eleColor = this.state.colors.map((color, index) => {
            return <span 
                        key={index} 
                        style={ this.showColor(color)}
                        className={this.props.color === color ? 'border border-dark font-weight-bold' :''}
                        onClick={()=> this.setActiveBoder(color)}
                        >{color}
                    </span>
        })
        return (
            <div className="col-6 border">
                <div className="panel panel-primary">
                  <div className="panel panel-heading  bg-primary mt-2">
                    <h3 className="panel-title"> Color Picker</h3>
                  </div>
                  <div className="panel panel-body text-center">
                    <hr/>
                    {eleColor}
                  </div>
                </div>
            </div>
        );
    }
}
export default ColorPicker;
