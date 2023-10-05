import { Component } from '@angular/core';
import { AboutUsPerson } from '../aboutus/models/aboutus-person.model';
import { News } from '../events/news-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomeComponent {
  people: AboutUsPerson[] = [];
  news: News[] = [];

  roles: string[] = ['Faculty', 'Excom'];
  constructor() {
    this.people.push({
      name: 'Name',
      role: 'Faculty',
      position: 'Position',
      imagePath: 'icons/user.svg'
    });

    for (let i = 0; i < 9; i++) {
      this.people.push({
        name: 'Name',
        role: 'Excom',
        position: 'Position',
        imagePath: 'icons/user.svg'
      });
    }

    this.news = [
      {
        title: "Bazm - e - Sukun",
        date: "25 October 2022",
        description: "Bazm-e-Sukun is a Declamation style competition that will take place at NED Main Auditorium",
        image_path: "../../../assets/news-page-images/news.jpg",
      },
      {
        title: "NED Debate Cup",
        date: "13 March 2022",
        description: "NED Debate up is 3v3 Parliamentary style competition that will  take place at NED Main Auditorium",
        image_path: "../../../assets/news-page-images/news.jpg",
      },
    ];
  }
  
  getFilteredByRole(role: string): AboutUsPerson[] {
    return this.people.filter((person) => person.role === role);
  }
}
