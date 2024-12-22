import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('modalComponent') modal:
    | ModalComponent<HeaderComponent>
    | undefined;

  dropdownOpen: boolean = false;
  loginUser: any;
  constructor(
    private router: Router,
    private elementRef: ElementRef,
    // private service: AuthService
  ) {
    // this.loginUser = this.service.getLoginDetail();
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    // Check if the clicked element is outside the dropdown
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // Close the dropdown
      this.dropdownOpen = false;
    }
  }

  doToggleMenu() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }

  async open(): Promise<void> {
    await this.modal?.open();
  }

  onLogout() {
    if (this.loginUser && this.loginUser.id) {
      // this.service
      //   .logOut({
      //     aid: this.loginUser.id,
      //   })
      //   .then((res: any) => {
      //     // this.service.deleteLoginData();
      //     setTimeout(() => {
      //       this.router.navigate(['/']);
      //     }, 1000);
      //   })
      //   .catch((err: any) => {
      //     // this.messageService.add({
      //     //   severity: 'error',
      //     //   summary: 'Error',
      //     //   detail: err,
      //     // });
      //   });
    } else {
      alert('Please provide aid');
    }
  }
}
