import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from "../../components/components.module";
import { JoinusModule } from '../joinus/joinus.module';



@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ComponentsModule,
        JoinusModule
    ]
})
export class HomeModule { }
