import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  /**
   * @description show/hide nav item in mobile view
   * @type {boolean}
   * @memberof NavbarComponent
   */
  hideNavMobile: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleNavItem() {
    this.hideNavMobile = !this.hideNavMobile;
  }
}
