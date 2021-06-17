import { debug } from "console";
import React from "react";
import TodoItem from "./components/TodoItem";
import "./components/TodoItem.css";

interface items{
  isChecked: boolean;
  content : string;
}

interface TodoAppProps {
}
interface TodoAppState {
  newTodo: string;
  todoItems: items[];
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      newTodo: "",
      todoItems: []
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.newTodo === ""){return;}
    for(let i = 0; i < this.state.todoItems.length; i++)
      if (this.state.newTodo.replace(/ /g, "") === this.state.todoItems[i].content.replace(/ /g, "")){this.setState({newTodo : ""}); return;}

    const items = this.state.todoItems.concat({content : this.state.newTodo, isChecked : false})

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }

  handleDelete = (key : number) => {
    const items = this.state.todoItems.filter(element => element !== this.state.todoItems[key])
    this.setState({
      todoItems : items
    })
  }

  handleCheck = (isChecked : boolean , key : number) => {
    const item = this.state.todoItems[key];
    item.isChecked = !isChecked;
    this.setState({
    })
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        {
          this.state.todoItems.map((item,idx) => (
            <TodoItem name={item.content} key={idx} order={idx + 1} isChecked={item.isChecked} handleDelete={this.handleDelete} handleCheck={this.handleCheck}/>
          ))
        }
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">무엇을 해야 할까요?</label> <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          <button>Add #{this.state.todoItems.length + 1}</button>
        </form>
      </div>
    )
  }
}

export default TodoApp;
