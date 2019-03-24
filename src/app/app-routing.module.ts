import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmileComponent } from './smile/smile.component';


const routes: Routes = [
  { path: '', component: SmileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
