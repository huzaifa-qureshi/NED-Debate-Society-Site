import { Component } from '@angular/core';
import { AboutUsPerson } from './models/aboutus-person.model';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss']
})
export class AboutusComponent {

  people: AboutUsPerson[] = [];
  roles: string[] = ['Faculty', 'Excom', 'Team Leads', 'Team XYZ'];

  constructor() {
    //Creating dummy data for now, just to render it.
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
      this.people.push({
        name: 'Name',
        role: 'Team Leads',
        position: 'Position',
        imagePath: 'icons/user.svg'
      });
      this.people.push({
        name: 'Name',
        role: 'Team XYZ',
        position: 'Position',
        imagePath: 'icons/user.svg'
      })
    }
  }

  getFilteredByRole(role: string): AboutUsPerson[] {
    return this.people.filter((person) => person.role === role);
  }
}
