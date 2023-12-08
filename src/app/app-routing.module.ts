import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { WebConstants } from './constants/web.constant';

const routes: Routes = [
  {
    path: '',
    redirectTo: WebConstants.HOME_URL,
    pathMatch: 'full',
  },
  {
    path: WebConstants.HOME_URL,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: WebConstants.ABOUT_URL, component: AboutComponent },
  { path: WebConstants.PAGE_NOT_FOUND, component: PageNotFoundComponent },
  {
    path: '**',
    redirectTo: WebConstants.PAGE_NOT_FOUND,
  }, // Wildcard route - make sure it should be last route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
