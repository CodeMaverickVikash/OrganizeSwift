import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  isNotCollapsed: boolean = true;
  title: string;
  desc: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.title = '';
    this.desc = '';
  }

  ngOnInit(): void {}

  addTodo() {
    const currentDate = new Date();
    const uniqueNumber = currentDate.getTime();
    const todo = {
      id: uniqueNumber,
      title: this.title,
      desc: this.desc,
      hide: true,
    };
    this.todoAdd.emit(todo);

    // clear
    this.title = '';
    this.desc = '';
    this.isNotCollapsed = true;
  }
}
