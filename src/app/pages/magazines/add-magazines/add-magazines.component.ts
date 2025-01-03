
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-add-magazines',
  imports: [FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterModule,
    ToastModule,
    CardModule,
    ],
  templateUrl: './add-magazines.component.html',
  styleUrl: './add-magazines.component.scss',
  providers:[MessageService]
})


export class AddMagazinesComponent {
  submitted = false;
  id: any = null;
  text: string | undefined;
  values: string[] | undefined;
  parentCategoryList: any[] = [];
  magazinesForm!: FormGroup;
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
        //   this.magazinesForm.patchValue({
        //     ...res.data,
        //     featured: res.data.featured === 1,
        //   });
        // });
      }
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.magazinesForm.controls;
  }

  ngOnInit(): void {
    this.Initform();
    // this.validationMessages = {
    //   title: [
    //     { type: 'required', message: messages.required },
    //     { type: 'maxlength', message: maxLength(100) },
    //   ],
    //   

    // };
  }
  Initform() {
    this.magazinesForm = this.fb.group({
    title: ['', [Validators.required,Validators.maxLength(100)]],
    videoUrl: ['',Validators.required],
    
    });
  }
  

  onFileChange(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      this.magazinesForm.patchValue({
        [controlName]: file,
      });
    }
  }

  

  onSubmit() {
    this.submitted = true;
    if (this.magazinesForm.valid) {
      let formData: any = new FormData();
      Object.keys(this.magazinesForm.controls).forEach((key: any) => {
        formData.append(key, this.magazinesForm?.get(key)?.value);
      });
      formData.append(
        'featured',
        this.magazinesForm.get('featured')?.value ? 1 : 0
      );
      this.submitted = false;
      if (this.id) {
        formData.append('cid', this.id);
      //   this.service
      //     .update(formData)
      //     .then((res: any) => {
      //       console.log(res);
      //       this.magazinesForm.reset();
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
      //       this.magazinesForm.reset();
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
