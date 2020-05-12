import React, {Component} from 'react';

class  TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    componentWillMount() {
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            });
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.task) {
            this.setState({
                id : nextProps.task.id,
                name : nextProps.task.name,
                status : nextProps.task.status

            });
        }
        else if( !nextProps.task ){
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
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
      var { id } = this.state;
        return (
                <div className=" border mb-5 p-2">
                    <div className="bg-heading bg-warning">
                        <h3 className="bg-title text-left">{ id !== '' ? 'Cập nhật công việc':'Thêm công việc'}
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
                                <button type="submit" className="btn btn-warning">Lưu lại</button>&nbsp;
                                <button type="submit" className="btn btn-danger" >Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
  }
  

export default TaskForm;
