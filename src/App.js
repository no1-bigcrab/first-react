import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class  App extends Component {
  constructor(props){
      super(props);
      this.state = {
          tasks :[],
          isDisplayForm: false,
          taskEditting: null
      }
  }

  componentWillMount(){
    //console.log(localStorage.getItem('tasks'));
    if (localStorage && localStorage.getItem('tasks')) {
        var value = JSON.parse(localStorage.getItem('tasks'));
        //console.log(JSON.parse(localStorage.getItem('tasks')));
        this.setState({
          tasks: value
        })
    }
  }


  S4(){
    return Math.floor(( 1+Math.random() )* 0x10000).toString(16).substring(1);
  }

  generateId(){
    return this.S4() + this.S4() + '-' + this.S4()+ '-' + this.S4()+ '-' + this.S4()+ '-' + this.S4()+ this.S4()+ this.S4();
  }

  onToggleFrom = () => {
    if ( this.state.isDisplayForm && this.state.taskEditting !== null ) {
      this.setState({
        isDisplayForm: true,
        taskEditting: null
      });
    }else{
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditting: null
      });
    }
    
  }

  onCloseForm = () =>{
    this.setState({
      isDisplayForm: false
    })
  }

  onShowForm = () =>{
    this.setState({
      isDisplayForm: true
    })
  }

  onSubmit = (data) => {
    var { tasks } = this.state;
    if (data.id === '') {
      data.id = this.generateId();
      tasks.push(data);
    }
    else {
      var index = this.findIndex(data.id);
      tasks[index] = data
    }
    
    this.setState({
      tasks: tasks,
      taskEditting: null
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus =(id)=>{
    var { tasks } = this.state;

    var index = this.findIndex(id);
    if ( index !== -1 ) {
      tasks[index].status = !tasks[index].status;

      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    

  }

  findIndex = (id) => {
      var { tasks } = this.state;
      var result = -1;
      tasks.forEach( (task, index) => {
          if (task.id === id) {
            result = index;
          }
      });

      return result;
  }

  onDelete = (id) =>{
    var { tasks } = this.state;

    var index = this.findIndex(id);
    if ( index !== -1 ) {
      tasks.splice(index, 1);

      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    this.onCloseForm();
  }
  
  onUpdate = (id) => {
    var { tasks } = this.state;

    var index = this.findIndex(id);
    var taskEditting = tasks[index];
    //console.log(taskEditting)
    this.setState({
      taskEditting: taskEditting
    });

    this.onShowForm();
  }

  render(){
    var { tasks, isDisplayForm, taskEditting } = this.state;
    var elmTaskForm = isDisplayForm 
        ? <TaskForm 
            onSubmit={this.onSubmit} 
            onCloseForm={this.onCloseForm}
            task={taskEditting}
            /> 
            :'';

    return (
        <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr/>
            </div>
              <div className="row">
                <div className={isDisplayForm === true?'col-xs-4 col-sm-4 col-md-4 col-lg-4':''}>
                    {/*  */}
                    { elmTaskForm }
                </div>
                <div className={ isDisplayForm === true?'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                    <button type="button" className="btn btn-primary" onClick={this.onToggleFrom}>
                        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                    </button>
                    {/* search and soft */}
                      <Control />
                    {/* {List danh sách} */}
                    <div className="row mt-15">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <TaskList 
                              tasks={tasks} 
                              onUpdateStatus={ this.onUpdateStatus }
                              onDelete={ this.onDelete }
                              onUpdate={this.onUpdate}
                          />
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
      );
    }
  }
  

export default App;
