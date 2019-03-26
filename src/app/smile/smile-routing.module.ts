import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmileComponent } from './smile.component';

const routes: Routes = [
  {
    path: '',
    component: SmileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmileRoutingModule { }
