import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  constructor(private router: Router){}

  toJoinUs(){
    this.router.navigateByUrl('join-us')
  }
}
