import { Component } from '@angular/core';
import { News } from './news-interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss']
})
export class EventsComponent {
  news: News[] = [];
  constructor() {
    // Sample data:
    this.news = [
      {
        title: "Bazm - e - Sukun",
        date: "25 October 2022",
        description: "Bazm-e-Sukun is a Declamation style competition that will take place at NED Main Auditorium",
        image_path: "/assets/news-page-images/news.jpg",
      },
      {
        title: "NED Debate Cup",
        date: "13 March 2022",
        description: "NED Debate up is 3v3 Parliamentary style competition that will  take place at NED Main Auditorium",
        image_path: "/assets/news-page-images/news.jpg",
      },
      {
        title: "Bazm - e - Sukun",
        date: "25 October 2022",
        description: "Bazm-e-Sukun is a Declamation style competition that will take place at NED Main Auditorium",
        image_path: "/assets/news-page-images/news.jpg",
      },
      {
        title: "NED Debate Cup",
        date: "13 March 2022",
        description: "NED Debate up is 3v3 Parliamentary style competition that will  take place at NED Main Auditorium",
        image_path: "/assets/news-page-images/news.jpg",
      }
    ];

  }
}
