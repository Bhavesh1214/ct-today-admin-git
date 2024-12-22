import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingEventsComponent } from './upcomming-events.component';

describe('UpcommingEventsComponent', () => {
  let component: UpcommingEventsComponent;
  let fixture: ComponentFixture<UpcommingEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcommingEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcommingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
