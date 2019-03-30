import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SmileComponent } from './smile/smile.module';
import { PortalComponent } from './portal/portal.component';
import { HotComponent } from './hot/hot.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: 'hot', component: HotComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'list', component: ListComponent },
  { path: 'smile', loadChildren: './smile/smile.module#SmileModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
