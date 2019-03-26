import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SmileComponent } from './smile/smile.module';
import { PortalComponent } from './portal/portal.component';


const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'smile', loadChildren: './smile/smile.module#SmileModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
