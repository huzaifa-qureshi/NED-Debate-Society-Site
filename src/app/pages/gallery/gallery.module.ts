import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.page';
import { GalleryRoutingModule } from './gallery-routing.module';
import { ComponentsModule } from "../../components/components.module";



@NgModule({
    declarations: [
        GalleryComponent
    ],
    imports: [
        CommonModule,
        GalleryRoutingModule,
        ComponentsModule
    ]
})
export class GalleryModule { }
