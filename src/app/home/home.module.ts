import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    HomeComponent,
    AddTodoComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    DragDropModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
