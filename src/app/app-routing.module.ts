import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SmileComponent } from './smile/smile.module';
// import { PortalComponent } from './portal/portal.component';
import { HotComponent } from './hot/hot.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/hot' },
  { path: 'hot', component: HotComponent, data: { animation: 'hot' } },
  { path: 'search', component: SearchComponent, data: { animation: 'search' } },
  { path: 'profile', component: ProfileComponent, data: { animation: 'profile' } },
  { path: 'list', component: ListComponent, data: { animation: 'list' } },
  { path: 'smile', loadChildren: './smile/smile.module#SmileModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
