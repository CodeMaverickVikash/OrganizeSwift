import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/Todo';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  /**
   * @description holds edit data for popup
   * @type {Todo}
   * @memberof TodosComponent
   */
  editData: Todo = {
    id: 0,
    title: '',
    desc: ''
  };
  /**
   * @description Holds the array of todo item
   * @type {Todo[]}
   * @memberof TodosComponent
   */
  @Input('todos') todos: any[] = [];

  /**
   * @description Todo delete event
   * @type {EventEmitter<Todo>}
   * @memberof TodosComponent
   */
  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() update: EventEmitter<Todo> = new EventEmitter();

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    this.delete.emit(todo);
  }

  /**
   * @description drop item into another index of arr
   * @param {CdkDragDrop<string[]>} event
   * @memberof TodosComponent
   */
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  toggleItem(todo: any) {
    if(!todo.hide) {
      todo.hide = true;
      return;
    }
    todo.hide = !todo.hide;
  }

  openEditModal(index: number, content: any) {
    let currTodo = this.todos.filter((todo, i) => i === index)[0];
    this.editData = { ...currTodo };
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log(`Closed with: ${result}`);
        },
        (reason) => {}
      );
  }

  updateTodo() {
    this.update.emit(this.editData);
    this.editData = {
      id: 0,
      title: '',
      desc: '',
    };
  }
}
