import React, {Component} from 'react';
import SearchControl from './SearchControl';
import SoftControl from './SoftControl';

class  Control extends Component {
  render(){
        return (
            <div className="row mt-15">
            {/* search */}
               <SearchControl onSearch={this.props.onSearch} />
                {/* soft */}
                <SoftControl />
            </div>
        );
    }
  }
  

export default Control;
