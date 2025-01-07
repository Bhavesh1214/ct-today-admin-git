import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvertismentsComponent } from './add-advertisments.component';

describe('AddAdvertismentsComponent', () => {
  let component: AddAdvertismentsComponent;
  let fixture: ComponentFixture<AddAdvertismentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAdvertismentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdvertismentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
