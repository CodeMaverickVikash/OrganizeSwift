import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  /**
   * @description Holds the array of todo item
   * @type {Todo[]}
   * @memberof TodosComponent
   */
  @Input('todos') todos: Todo[] = [];

  /**
   * @description Todo delete event
   * @type {EventEmitter<Todo>}
   * @memberof TodosComponent
   */
  @Output() delete: EventEmitter<Todo> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    this.delete.emit(todo);
  }
}
