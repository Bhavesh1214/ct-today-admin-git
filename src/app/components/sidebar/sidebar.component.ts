import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private router: Router) {}
  menuItems = [
    {
      title: 'Dashboard',
      url: '/app/dashboard',
      icon: 'fas fa-home',
      open: false,
      subItems: [],
    },
    {
      title: 'Product Management',
      url: '',
      icon: 'fas fa-user',
      open: false,
      subItems: [
        { title: 'Product Categories', url: 'product-managemnt' },
      ],
    },
    {
      title: 'News Master',
      url: '',
      icon: 'fas fa-user',
      open: false,
      subItems: [
        { title: 'News', url: 'news' },
      ],
    },
    {
      title: 'Video Master',
      url: '',
      icon: 'fas fa-user',
      open: false,
      subItems: [
        { title: 'Video', url: 'video' },
      ],
    },
    {
      title: 'Magazines',
      url: '',
      icon: 'fas fa-user',
      open: false,
      subItems: [
        { title: 'Magazines', url: 'magazines' },
      ],
    },
    {
      title: 'Testimonials',
      url: '',
      icon: 'fas fa-user',
      open: false,
      subItems: [
        { title: 'Testimonials', url: 'testimonials' },
      ],
    },
    {
      title: 'Advertisments',
      url: '',
      icon: 'fas fa-user',
      open: false,
      subItems: [
        { title: 'Advertisments', url: 'advertisments' },
      ],
    },
    {
      title: 'Up Comming Event',
      url: '',
      icon: 'fas fa-user',
      open: false,
      subItems: [
        { title: 'Up Comming Event', url: 'up-comming-event' },
      ],
    },
    
    
  ];

  toggleDropdown(index: number, item: any) {
    this.menuItems.forEach((item, i) => {
      if (i !== index) {
        item.open = false;
      }
    });
    this.menuItems[index].open = !this.menuItems[index].open;
    if (item?.subItems.length == 0) {
      this.router.navigate([item.url]);
    }
  }
}
