import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollingTextComponent } from './scrolling-text/scrolling-text.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroSectionComponent,
    FooterComponent,
    ScrollingTextComponent,
    JoinUsComponent,
    ContactFormComponent,
    GalleryComponentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    HeroSectionComponent,
    FooterComponent,
    ScrollingTextComponent,
    JoinUsComponent,
    ContactFormComponent,
    GalleryComponentComponent,
  ]
})
export class ComponentsModule { }
