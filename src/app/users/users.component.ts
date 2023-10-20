import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private subService: SubjectService) { }

  ngOnInit(): void {
  }

  users = [
    {
      id: 1,
      name: 'max'
    },
    {
      id: 2,
      name: 'Vikash'
    },
    {
      id: 3,
      name: 'sanu'
    },
    {
      id: 4,
      name: 'john'
    }
  ];



  onActivate() {
    // this.subService.activatedEmitter.emit(true);
    this.subService.activatedEmitter.next(true); // for subject
  }

}
