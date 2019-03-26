import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmileComponent } from './smile/smile.component';
import { PortalComponent } from './portal/portal.component';


const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'smile', component: SmileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
