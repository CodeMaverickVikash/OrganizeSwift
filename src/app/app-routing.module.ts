import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const home = "OrganizeSwift";

const routes: Routes = [
  { path: home, component: TodosComponent },
  { path: home + '/about', component:  AboutComponent},
  { path: home + '/contact', component:  ContactComponent},
  { path: home + '/users', component:  UsersComponent, children: [
          { path: ':id/:name', component:  UserComponent}, // it's a dynamic route
  ]},
  
  {path: home + 'page-not-found', component: PageNotFoundComponent},
  {path: home + '**', redirectTo: '/page-not-found'}, // Wildcard route - make sure it should be last route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
