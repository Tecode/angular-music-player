import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SmileComponent } from './smile/smile.module';
// import { PortalComponent } from './portal/portal.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/hot' },
  { path: 'hot', loadChildren: './hot/hot.module#HotModule' },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'list', loadChildren: './list/list.module#ListModule' },
  { path: 'smile', loadChildren: './smile/smile.module#SmileModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
