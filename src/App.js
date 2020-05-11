import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName : '',
      txtPass : '',
      textDesc : '',
      textOption:'',
      checkBox:''
    }

    this.onHandlerChange = this.onHandlerChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this)

  }
  
  onHandlerChange(event){
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      })
  }

  onHandleSubmit(event){
     
      console.log(this.state);
      event.preventDefault();
  }

  render(){
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-8">
              <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"> Thi is the Form</h3>
                  </div>
                  <div className="panel-body">
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                          <label>Username:</label>
                          <input type="text"
                              className="form-control"
                              name="txtName"
                              onChange={this.onHandlerChange}>
                          </input>
                        </div>
                        <div className="form-group">
                          <label>Password:</label>
                          <input type="text"
                              className="form-control"
                              name="txtPass"
                              onChange={this.onHandlerChange}>
                          </input>
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <textarea 
                                className="form-control"
                                name="textDesc" 
                                rows="3"
                                onChange={this.onHandlerChange}
                            >
                            </textarea>
                        </div>
                        <div className="form-group">
                            <select className="form-control"  onChange={this.onHandlerChange} name="textOption">
                              <option value="Option-1"> Option-1</option>
                              <option value="Option-2"> Option-2</option>
                              <option value="Option-3"> Option-3</option>
                            </select>
                        </div>
                        <br/>
                        <label> Languges:</label>
                        <div className="form-group">
                            <label>
                                <input type="radio" checked
                                    name="checkBox"
                                    onChange={this.onHandlerChange}  
                                />&nbsp;
                                Tiếng Việt
                            </label><br/>
                            <label>
                                <input type="radio"
                                    name="checkBox"
                                    onChange={this.onHandlerChange}  
                                />
                                Tiếng Anh
                            </label> &nbsp;
                           
                        </div>
                        <button className="btn btn-primary" type="submit"> Lưu lại</button>&nbsp;
                        <button className="btn btn-danger" type="reset"> Clear All</button>

                    </form>
                    
                  </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
