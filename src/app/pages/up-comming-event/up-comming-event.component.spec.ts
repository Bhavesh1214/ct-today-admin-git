import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCommingEventComponent } from './up-comming-event.component';

describe('UpCommingEventComponent', () => {
  let component: UpCommingEventComponent;
  let fixture: ComponentFixture<UpCommingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpCommingEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpCommingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
