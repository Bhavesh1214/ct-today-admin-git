import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// import { AuthService } from '../../services/auth.service';
// import { MessageService } from 'primeng/api';
// import { Messages } from 'primeng/messages';
// import { messages } from '../../constans/util';
// import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  // providers: [MessageService],
})
export class LoginComponent {
  form!: FormGroup;
  validationMessages: any;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private service: AuthService,
    // private messageService:MessageService
  ) {}

  get f() {
    return this.form?.controls;
  }
  ngOnInit(): void {
    this.Initform();
    this.validationMessages = {
      // username: [{ type: 'required', message: messages.required },],
      // password: [{ type: 'required', message: messages.required }],
    };
  }
  Initform() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false],
    });
  }
  onSubmit(): void {
    this.submitted = true;
    this.router.navigate(['/dashboard']);

    if (this.form.valid) {
      this.submitted = false;
      let data = this.form.getRawValue();
      // this.service
      //   .login(data)
      //   .then((res: any) => {
      //     console.log("res",res);
          
      //     if (res.status == 200) {
      //       this.service.setLoginDetail(res.data);
      //       setTimeout(() => {
      //         this.router.navigate(['/app/dashboard']);
      //       }, 1000);
      //       this.messageService.add({
      //         severity: 'success',
      //         summary: 'Success',
      //         detail: res?.message,
      //       });
      //     }
      //   })
      //   .catch((err: any) => {
      //     console.log("err",err);

      //     this.messageService.add({
      //       severity: 'error',
      //       summary: 'Error',
      //       detail: err.message,
      //     });
      //   });
    }
  }
}
