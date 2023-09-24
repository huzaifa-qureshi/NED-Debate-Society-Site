import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinusComponent } from './joinus.page';

const routes: Routes = [{path: '', component:JoinusComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinusRoutingModule { }
