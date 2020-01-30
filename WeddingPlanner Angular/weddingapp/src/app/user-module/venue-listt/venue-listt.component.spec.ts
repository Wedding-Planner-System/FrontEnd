import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueListtComponent } from './venue-listt.component';

describe('VenueListtComponent', () => {
  let component: VenueListtComponent;
  let fixture: ComponentFixture<VenueListtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueListtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueListtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
