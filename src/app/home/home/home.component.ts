import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos: Todo[];

  constructor(private commonService: CommonService) {
    this.todos = [];
  }

  ngOnInit(): void {
    this.fecthTodos();
  }

  fecthTodos() {
    this.commonService.ajax({
      url: this.getServerUrl(),
      method: 'GET',
      success: (resp: any) => {
        if (!resp.body) {
          return;
        }
        this.todos = resp.body;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  AddTodo(todo: any) {
    this.todos.push(todo);
    todo.hide && delete todo.hide;
    this.commonService.ajax({
      url: this.getServerUrl(),
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(todo),
      success: (resp: any) => {
        console.log(resp.body);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.commonService.ajax({
      url: this.getServerUrl() + todo.id,
      method: 'DELETE',
      success: (resp: any) => {
        console.log(resp.body);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getServerUrl() {
    return 'http://localhost:3000/todos/';
  }

  updateTodo(todo: any) {
    this.todos = this.todos.map((item) => {
      if (item.id === todo.id) {
        todo.hide && delete todo.hide;
        item = todo;
      }
      return item;
    });
    this.commonService.ajax({
      url: this.getServerUrl() + todo.id,
      method: 'PUT',
      data: JSON.stringify(todo),
      contentType: 'application/json',
      success: (resp: any) => {
        console.log(resp.body);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
