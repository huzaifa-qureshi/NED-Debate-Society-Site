import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinusComponent } from './joinus.page';
import { JoinusRoutingModule } from './joinus-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    JoinusComponent
  ],
  imports: [
    CommonModule,
    JoinusRoutingModule,
    ComponentsModule
  ],
  exports:[
    JoinusComponent,
  ]
})
export class JoinusModule { }
