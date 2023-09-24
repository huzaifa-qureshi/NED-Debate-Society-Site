import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navitems = [
    {
      name: 'Home',
      route: '/home'
    },
    {
      name: 'Events',
      route: '/events'
    },
    {
      name: 'Gallery',
      route: '/gallery'
    },
    {
      name: 'About Us',
      route: '/about-us'
    },
    {
      name: 'Contact Us',
      route: '/contact-us'
    },
    {
      name: 'Join Us',
      route: '/join-us'
    }
  ]
  constructor(private router: Router){}

  changeRoute(item: { route: string | UrlTree; }){
    this.router.navigateByUrl(item.route)
  }
}
