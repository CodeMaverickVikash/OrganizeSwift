import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component:  AboutComponent},
  { path: 'contact', component:  ContactComponent},
  { path: 'users', component:  UsersComponent, children: [
          { path: ':id/:name', component:  UserComponent}, // it's a dynamic route
  ]},
  
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found'}, // Wildcard route - make sure it should be last route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
