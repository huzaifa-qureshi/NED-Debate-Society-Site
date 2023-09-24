import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinusComponent } from './joinus.page';
import { JoinusRoutingModule } from './joinus-routing.module';



@NgModule({
  declarations: [
    JoinusComponent
  ],
  imports: [
    CommonModule,
    JoinusRoutingModule
  ]
})
export class JoinusModule { }
