import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollingTextComponent } from './scrolling-text/scrolling-text.component';
import { JoinUsComponent } from './join-us/join-us.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeroSectionComponent,
    FooterComponent,
    ScrollingTextComponent,
    JoinUsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    HeroSectionComponent,
    FooterComponent,
    ScrollingTextComponent,
    JoinUsComponent,
  ]
})
export class ComponentsModule { }
