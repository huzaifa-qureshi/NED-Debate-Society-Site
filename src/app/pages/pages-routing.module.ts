import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./aboutus/aboutus.module').then((m) => m.AboutusModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contactus/contactus.module').then((m) => m.ContactusModule),
  },
  {
    path: 'join-us',
    loadChildren: () =>
      import('./joinus/joinus.module').then((m) => m.JoinusModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
