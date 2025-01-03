import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';
import { AddProductManagemntComponent } from './pages/product-management/add-product-managemnt/add-product-managemnt.component';
import { NewsComponent } from './pages/news/news.component';
import { AddNewsComponent } from './pages/news/add-news/add-news.component';
import { VideoComponent } from './pages/video/video.component';
import { AddVideoComponent } from './pages/video/add-video/add-video.component';
import { MagazinesComponent } from './pages/magazines/magazines.component';
import { AddMagazinesComponent } from './pages/magazines/add-magazines/add-magazines.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'app',
        component: MainComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'product-managemnt',
            children: [
              { path: '', component: ProductManagementComponent },
              { path: 'add', component: AddProductManagemntComponent },
              { path: 'edit/:id', component: AddProductManagemntComponent },
              // {
              //   path: 'review',
              //   children: [
              //     { path: '', component: ReviewsComponent },
              //     { path: 'edit/:id', component: ReviewEditComponent },
              //   ],
              // },
            ],
          },
          {
            path: 'news',
            children: [
              { path: '', component: NewsComponent },
              { path: 'add', component: AddNewsComponent },
              { path: 'edit/:id', component: AddNewsComponent },
            ],
          },
          {
            path: 'video',
            children: [
              { path: '', component: VideoComponent },
              { path: 'add', component: AddVideoComponent },
              { path: 'edit/:id', component: AddVideoComponent },
              
            ],
          },
          {
            path: 'magazines',
            children: [
              { path: '', component: MagazinesComponent },
              { path: 'add', component: AddMagazinesComponent },
              { path: 'edit/:id', component: AddMagazinesComponent },
              
            ],
          },
        ]
    }
];
