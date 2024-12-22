import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChipsModule } from 'primeng/chips';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-add-news',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    EditorModule,
    ChipsModule,
    RouterModule,
    ToastModule,
    CardModule,
    CalendarModule,
  ],
  providers: [MessageService],
  templateUrl: './add-news.component.html',
  styleUrl: './add-news.component.scss'
})
export class AddNewsComponent {
  submitted = false;
  id: any = null;
  text: string | undefined;
  values: string[] | undefined;
  parentCategoryList: any[] = [];
  registrationForm!: FormGroup;
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
        //   this.registrationForm.patchValue({
        //     ...res.data,
        //     featured: res.data.featured === 1,
        //   });
        // });
      }
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.Initform();
    // this.validationMessages = {
    //   title: [
    //     { type: 'required', message: messages.required },
    //     { type: 'maxlength', message: maxLength(100) },
    //   ],
    //   status: [{ type: 'required', message: messages.required }],
    //   body: [{ type: 'maxlength', message: maxLength(1000) }],
    //   parent_cid: [{ type: 'required', message: messages.required }],
    //   highlight_message: [{ type: 'maxlength', message: maxLength(2000)  }],
    //   advantage_message: [{ type: 'maxlength', message: maxLength(2000)  }],
    //   how_it_works: [{ type: 'maxlength', message: maxLength(2000)  }],
    //   about:  [{ type: 'maxlength', message: maxLength(2000)  }],
    //   pop_up_advantage_message: [{ type: 'maxlength', message: maxLength(2000)  }],
    //   meta_keyword: [{ type: 'maxlength', message: maxLength(1000)  }],
    //   meta_description: [{ type: 'maxlength', message: maxLength(1000)  }],

    // };
  }
  Initform() {
    this.registrationForm = this.fb.group({
      title: ['', [Validators.required,Validators.maxLength(100)]],
    banner: [''],
    icon: [''],
    icon_for_mobile_view: [''],
    image: [''],
    parent_cid: ['0',Validators.required],
    highlight_message: ['',Validators.maxLength(2000)],
    advantage_message: ['',Validators.maxLength(2000)],
    how_it_works:  ['',Validators.maxLength(2000)],
    about: ['',Validators.maxLength(2000)],
    pop_up_advantage_message: ['',Validators.maxLength(2000)],
    // pop_up_advantage_image: [''],
    featured: [0],
    status: ['1'],
    dtype: ['W'],

       // meta detail
       page_title: [''],
       meta_title: [''],
       meta_description: [''],
       meta_keyword: [''],
    });
  }
  getAllCategory() {
    // this.service.getAllParentCategory().then((res: any) => {
    //   if (res.status === 200) {
    //     this.parentCategoryList = res.data;
    //   }
    // });
  }

  onFileChange(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) {
      this.registrationForm.patchValue({
        [controlName]: file,
      });
    }
  }

  

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.valid) {
      let formData: any = new FormData();
      Object.keys(this.registrationForm.controls).forEach((key: any) => {
        formData.append(key, this.registrationForm?.get(key)?.value);
      });
      formData.append(
        'featured',
        this.registrationForm.get('featured')?.value ? 1 : 0
      );
      this.submitted = false;
      if (this.id) {
        formData.append('cid', this.id);
      //   this.service
      //     .update(formData)
      //     .then((res: any) => {
      //       console.log(res);
      //       this.registrationForm.reset();
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
      //       this.registrationForm.reset();
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
