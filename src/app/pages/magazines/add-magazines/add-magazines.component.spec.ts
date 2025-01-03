import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMagazinesComponent } from './add-magazines.component';

describe('AddMagazinesComponent', () => {
  let component: AddMagazinesComponent;
  let fixture: ComponentFixture<AddMagazinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMagazinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
