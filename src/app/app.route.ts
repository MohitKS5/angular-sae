import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MembersComponent} from './components/members/members.component';
import {AboutComponent} from './components/about/about.component';
import {SponsorsComponent} from './components/sponsors/sponsors.component';
import {AlumniComponent} from './components/alumni/alumni.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'sponsors',
    component: SponsorsComponent,
  },
  {
    path: 'alumni',
    component: AlumniComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
