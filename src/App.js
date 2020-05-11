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
          isDisplayForm: false
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
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }

  onCloseForm = () =>{
    this.setState({
      isDisplayForm: false
    })
  }

  onSubmit = (data) => {
    var { tasks } = this.state;
      
    data.id = this.generateId();
    tasks.push(data);
    this.setState({
      tasks: tasks
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
  }
  render(){
    var { tasks, isDisplayForm } = this.state;
    var elmTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> :'';

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
