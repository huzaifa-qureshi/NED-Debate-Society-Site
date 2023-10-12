import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  ischecked: any;
  
  public navitems = [
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

  closenav(){
    this.ischecked = !this.ischecked
  }

}
