import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentsComponent } from './advertisments.component';

describe('AdvertismentsComponent', () => {
  let component: AdvertismentsComponent;
  let fixture: ComponentFixture<AdvertismentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertismentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertismentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
