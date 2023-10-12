import { Component } from '@angular/core';

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery-component.component.html',
  styleUrls: ['./gallery-component.component.scss']
})
export class GalleryComponentComponent {
  public images = [
    {
      url: "../../../assets/Gallery/g-1.png",
    },
    {
      url: "../../../assets/Gallery/g-2.png",
    },
    {
      url: "../../../assets/Gallery/g-3.png",
    },
    {
      url: "../../../assets/Gallery/g-4.png",
    },
    
  ]
}
