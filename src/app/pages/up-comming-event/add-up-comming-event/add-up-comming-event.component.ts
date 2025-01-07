

import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-add-testimonials',
  imports: [FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterModule,
    ToastModule,
    CardModule,
    ],
  templateUrl: './add-up-comming-event.component.html',
  styleUrl: './add-up-comming-event.component.scss',
  providers:[MessageService]
})


export class AddUpCommingEventComponent {
  submitted = false;
  id: any = null;
  text: string | undefined;
  values: string[] | undefined;
  parentCategoryList: any[] = [];
  upCommingForm!: FormGroup;
  validationMessages:any
 
  date: Date = new Date();

  constructor(
    private fb: FormBuilder,
    // private service: CategoryService,
    private messageService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        // this.service.getDetail(params['id']).then((res: any) => {
        //   this.upCommingForm.patchValue({
        //     ...res.data,
        //     featured: res.data.featured === 1,
        //   });
        // });
      }
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.upCommingForm.controls;
  }

  ngOnInit(): void {
    this.Initform();
    // this.validationMessages = {
    //   name: [
    //     { type: 'required', message: messages.required },
    //     { type: 'maxlength', message: maxLength(100) },
    //   ],
    //   

    // };
  }
  Initform() {
    this.upCommingForm = this.fb.group({
    title: ['', [Validators.required,Validators.maxLength(100)]],
    date:['',Validators.required],
    focus: ['',Validators.required],
    monthDate:['',Validators.required],
    location:['',Validators.required],
    organisersContact:['',Validators.required],
    });
  }
  

  onFileChange(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      this.upCommingForm.patchValue({
        [controlName]: file,
      });
    }
  }

  

  onSubmit() {
    this.submitted = true;
    if (this.upCommingForm.valid) {
      let formData: any = new FormData();
      Object.keys(this.upCommingForm.controls).forEach((key: any) => {
        formData.append(key, this.upCommingForm?.get(key)?.value);
      });
      formData.append(
        'featured',
        this.upCommingForm.get('featured')?.value ? 1 : 0
      );
      this.submitted = false;
      if (this.id) {
        formData.append('cid', this.id);
      //   this.service
      //     .update(formData)
      //     .then((res: any) => {
      //       console.log(res);
      //       this.upCommingForm.reset();
      //       this.messageService.add({
      //         severity: 'success',
      //         summary: 'Success',
      //         detail: res.message,
      //       });
      //       setTimeout(() => {
      //         this.router.navigate(['/app/category']);
      //       }, 1000);
      //     })
      //     .catch((error) => {
      //       console.log('error', error);
      //     });
      // } else {
      //   this.service
      //     .create(formData)
      //     .then((res: any) => {
      //       console.log(res);
      //       this.upCommingForm.reset();
      //       this.messageService.add({
      //         severity: 'success',
      //         summary: 'Success',
      //         detail: res.message,
      //       });
      //       setTimeout(() => {
      //         this.router.navigate(['/app/category']);
      //       }, 1000);
      //     })
      //     .catch((error) => {
      //       console.log('error', error);
      //     });
      }
    }
  }
}
