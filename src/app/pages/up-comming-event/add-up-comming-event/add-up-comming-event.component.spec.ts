import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpCommingEventComponent } from './add-up-comming-event.component';

describe('AddUpCommingEventComponent', () => {
  let component: AddUpCommingEventComponent;
  let fixture: ComponentFixture<AddUpCommingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpCommingEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpCommingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
