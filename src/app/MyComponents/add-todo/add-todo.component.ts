import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/Todo';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {}

  title!: string;
  desc!: string;

  // sending data to parent component : todos
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  addTodo() {
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    this.title = '';
    this.desc = '';
  }

  loadContact() {
    // conplex calculation
    this.router.navigate(['/contact'], {queryParams: {allowEdit: '1'}, fragment: 'loading'}); // redirect
  }

  private firstObSubscription!: Subscription;

  ngOnInit(): void {
    // Stop the observable or prevent to memory leak, need to unsubscribe the observable.
    // this.firstObSubscription = interval(1000).subscribe(count => { // Refer Todo-list app for this
    //   console.log(count);
    // })

    // Custom interval observable
    const customIntervalObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(()=> {
        observer.next(count); // pass
        if(count === 2) {
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      },1000);
    });
    
    // this.firstObSubscription = customIntervalObservable.subscribe((data: any) => {
    //   console.log(data);
    // }, (error: any) => {
    //   console.log(error);
    //   alert(error.message);
    // }, () => {
    //   console.log('Completed!');
    // });

    // Operator - you might want a raw data sometime, you want transformed or filterout data then need to use operator.
    this.firstObSubscription = customIntervalObservable.pipe(filter((data: any) => {
      return data > 0;
    }),map((data: any) => {
      return 'Round: ' + (data+1);
    })).subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy(): void {
    this.firstObSubscription.unsubscribe();
  }

}
