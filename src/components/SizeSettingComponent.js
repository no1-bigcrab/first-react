import React, { Component } from 'react';

class SizeSetting extends Component {
    render (){
        return (
                <div className="panel panel-warning p-2">
                    <div className="panel panel-heading bg-warning">
                        <h3 className="panel-title">Size 15px</h3>
                    </div>
                    <div className="panel panel-body p-2 ">
                        <button type="button" className="btn btn-success mr-1" onClick="">Tăng</button>
                        <button type="button" className="btn btn-danger ml-1" onClick="">Giảm</button>
                    </div>
                </div>
                 
        );
    }
}
export default SizeSetting;
