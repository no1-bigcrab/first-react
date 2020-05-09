import React, { Component } from 'react';

class Result extends Component {

    setStyle(){

        return {
            color : this.props.color,
            border : '1px solid '+this.props.color,
            padding: 5
        }
    }
    render (){
        return (
            <div className="col-lg-12 col-md-12 col-lg-12 border">
                <p> Color : red - fonsize: 15px</p>
                <div id="content" style={this.setStyle()}>
                  Nội dung setting
                </div>
            </div>
        );
    }
}
export default Result;
