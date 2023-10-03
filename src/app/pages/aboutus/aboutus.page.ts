import { Component } from '@angular/core';
import { AboutUsPerson } from './models/aboutus-person.model';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss']
})
export class AboutusComponent {

  // An array to hold information about people involved in the organization.
  people: AboutUsPerson[] = [];

  // An array defining the possible roles within the organization.
  roles: string[] = ['Faculty', 'Excom', 'Team Leads', 'Team XYZ'];

  /**
   * Constructor - Initializes the component.
   *
   * In the constructor, dummy data is created to populate the 'people' array.
   * This data is used to render the information on the 'About Us' page.
   */
  constructor() {
    // Creating a dummy data entry for a Faculty member.
    this.people.push({
      name: 'Name',
      role: 'Faculty',
      position: 'Position',
      imagePath: 'icons/user.svg'
    });

    // Creating dummy data for Excom, Team Leads, and Team XYZ roles.
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

  /**
   * getFilteredByRole - Filter people based on their roles.
   *
   * This method filters the 'people' array to return only those individuals
   * who have the specified 'role'.
   *
   * @param {string} role - The role by which to filter the people.
   * @returns {AboutUsPerson[]} - An array of people matching the specified role.
   */
  getFilteredByRole(role: string): AboutUsPerson[] {
    return this.people.filter((person) => person.role === role);
  }
}