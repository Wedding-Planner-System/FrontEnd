import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueRegistrationComponent } from './venue-registration.component';

describe('VenueRegistrationComponent', () => {
  let component: VenueRegistrationComponent;
  let fixture: ComponentFixture<VenueRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
