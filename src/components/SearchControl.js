import React, {Component} from 'react';

class  SearchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  
  onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    
    this.setState({
        [name] : value
    });
}

  onSearch = (keyword) => {
    this.props.onSearch(this.state.keyword);
  }
  render(){
        return (
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input type="text"
                              name="keyword" 
                              className="form-control" 
                              placeholder="Nhập từ khóa..." 
                              // value={keyword}
                              onChange={ this.onChange }
                              />
                        <span className="input-group-btn">
                                    <button className="btn btn-primary" 
                                            type="button"
                                            onClick={ this.onSearch }
                                    >
                                        Tìm kiếm
                                    </button>
                        </span>
                    </div>
                </div>
                
        );
    }
  }
  

export default SearchControl;
