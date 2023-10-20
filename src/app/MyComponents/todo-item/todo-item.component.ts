import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo; // Input decorator
  @Input() i!: number; // basically we are getting data from parent component - Parent to child communication with alias (also called custom property in udemy)
  
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); // basically we are giving this to parent component - Child to parent communication with alias (also called custom event in udemy)
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }

  deleteMethod(todo: Todo) {
    this.todoDelete.emit(todo);
  }

  onCheckbox(todo: Todo) {
    console.log(todo)
    this.todoCheckbox.emit(todo);
    console.log(todo)
  }
}
