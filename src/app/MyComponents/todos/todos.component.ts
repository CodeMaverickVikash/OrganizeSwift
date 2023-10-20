import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // Typescript is the superset of javascript
  todos: Todo[];
  localItem: string;
  constructor() { 
    this.localItem = localStorage.getItem('todos')?? "";

    if(this.localItem == "") {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem); // we are converting json string into js object
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  AddTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos)); // json string we are inserting into localstorage
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  ngOnInit(): void {
  }

}
