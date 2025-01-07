
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PaginatorModule } from 'primeng/paginator';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-advertisments',
  imports: [TagModule,
    RatingModule,
    TableModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    ConfirmDialogModule,
    ToastModule,
    RouterModule,PaginatorModule],
  templateUrl: './advertisments.component.html',
  styleUrl: './advertisments.component.scss',
  providers: [ConfirmationService, MessageService],

})
export class AdvertismentsComponent {
  loginUser: any;
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    // private service: CategoryService,
    // private authService: AuthService
  ) {
    // this.loginUser = this.authService.getLoginDetail();
  }

  ngOnInit(): void {
    this.getList(1);
  }

  first: number = 0;
  totalRecords: number = 0;
  rows: number = 10;
  categoryList: any[] = [];

  onPageChange(event: any) {
    const page = event.page + 1;
    this.getList(page);
  }

  getSeverity(status: any) {
    if (status === 1) {
      return 'success';
    } else {
      return 'danger';
    }
  }

  getIcon(icon: any) {
    return `${icon}`;
  }

  getList(page: number) {
    // this.service
    //   .paginationList(page)
    //   .then((res: any) => {
    //     if (res.status === 200) {
    //       this.categoryList = res.data.data;
    //       this.totalRecords = res.data.total;
    //     } else {
    //       this.messageService.add({
    //         severity: 'error',
    //         summary: 'Error',
    //         detail: res.message,
    //       });
    //     }
    //   })
    //   .catch((err: any) => {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Error',
    //       detail: err.message || 'An error occurred while fetching data.',
    //     });
    //   });
  }

  confirm2(event: Event, cid: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      // accept: () => {
      //   this.service
      //     .deleteCategory(cid, this.loginUser.id)
      //     .then((res: any) => {
      //       if (res.status === 200)
      //         this.messageService.add({
      //           severity: 'info',
      //           summary: 'Confirmed',
      //           detail: res?.message,
      //         });
      //       this.getList(1);
      //     })
      //     .catch((err) => {});
      // },
      // reject: () => {
      //   this.messageService.add({
      //     severity: 'error',
      //     summary: 'Rejected',
      //     detail: 'You have rejected',
      //   });
      // },
    });
  }
}
