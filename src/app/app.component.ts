import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root', // This is used in html to render it
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'OrganizeSwift';

  constructor() {
    setTimeout(() => {
      this.title = "changed title";
    }, 2000);
  }

  private activatedSub!: Subscription;
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
