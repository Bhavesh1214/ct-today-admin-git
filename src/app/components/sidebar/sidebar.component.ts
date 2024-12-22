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
      title: 'News Management',
      url: '',
      icon: 'fas fa-user',
      open: false,
      subItems: [
        { title: 'News', url: 'news' },
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
