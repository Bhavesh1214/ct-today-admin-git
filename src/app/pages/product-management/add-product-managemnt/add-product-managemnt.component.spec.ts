import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductManagemntComponent } from './add-product-managemnt.component';

describe('AddProductManagemntComponent', () => {
  let component: AddProductManagemntComponent;
  let fixture: ComponentFixture<AddProductManagemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductManagemntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductManagemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
