import React, {Component} from 'react';

class  TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            status: false
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChanges =  (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state)
//đóng form
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name:'',
            status: false
        })
    }

  render(){
      
        return (
                <div className=" border mb-5 p-2">
                    <div className="bg-heading bg-warning">
                        <h3 className="bg-title text-left">Thêm Công Việc
                            <span className="fa fa-times-circle text-right"
                                    onClick = { this.onCloseForm }
                            >
                            CLose Form
                            </span>
                        </h3>
                    </div>
                    <div className="bg-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" 
                                    className="form-control" 
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChanges}
                                    />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" 
                                    required="required" 
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChanges}
                            >
                                <option value={ false }>Ẩn</option>
                                <option value={ true }>Kích Hoạt</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                <button type="submit" className="btn btn-danger" >Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
  }
  

export default TaskForm;
