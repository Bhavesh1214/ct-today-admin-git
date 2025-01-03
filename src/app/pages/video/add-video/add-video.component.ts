import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-add-video',
  imports: [FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterModule,
    ToastModule,
    CardModule,
    ],
  templateUrl: './add-video.component.html',
  styleUrl: './add-video.component.scss',
  providers:[MessageService]
})


export class AddVideoComponent {
  submitted = false;
  id: any = null;
  text: string | undefined;
  values: string[] | undefined;
  parentCategoryList: any[] = [];
  videoForm!: FormGroup;
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
        //   this.videoForm.patchValue({
        //     ...res.data,
        //     featured: res.data.featured === 1,
        //   });
        // });
      }
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.videoForm.controls;
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
    this.videoForm = this.fb.group({
    title: ['', [Validators.required,Validators.maxLength(100)]],
    videoUrl: ['',Validators.required],
    
    });
  }
  

  onFileChange(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      this.videoForm.patchValue({
        [controlName]: file,
      });
    }
  }

  

  onSubmit() {
    this.submitted = true;
    if (this.videoForm.valid) {
      let formData: any = new FormData();
      Object.keys(this.videoForm.controls).forEach((key: any) => {
        formData.append(key, this.videoForm?.get(key)?.value);
      });
      formData.append(
        'featured',
        this.videoForm.get('featured')?.value ? 1 : 0
      );
      this.submitted = false;
      if (this.id) {
        formData.append('cid', this.id);
      //   this.service
      //     .update(formData)
      //     .then((res: any) => {
      //       console.log(res);
      //       this.videoForm.reset();
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
      //       this.videoForm.reset();
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
