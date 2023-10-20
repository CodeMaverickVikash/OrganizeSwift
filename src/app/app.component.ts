import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-root', // This is used in html to render it
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular-todo-list'; // variable

  subActivated = false; // property

  constructor(private subService: SubjectService) {
    setTimeout(() => {
      this.title = "changed title";
    }, 2000);
  }

  private activatedSub!: Subscription;
  ngOnInit(): void {
    this.activatedSub = this.subService.activatedEmitter.subscribe(didActivated => { // same for both eventEmitter and subject
      this.subActivated = didActivated;
    })
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
