import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'], // Fetching routes parameter
      name: this.route.snapshot.params['name']
    }

    // params is built in observable, to built-in observable you don't need to unsubscribe angular will handle it. To custom observable, need to unsubscribe
    this.route.params.subscribe((params: Params)=> {
      this.user.id = params['id'];
      this.user.name = params['name'];
    })
  }

}
