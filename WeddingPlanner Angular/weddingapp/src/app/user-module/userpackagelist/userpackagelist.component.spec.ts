import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpackagelistComponent } from './userpackagelist.component';

describe('UserpackagelistComponent', () => {
  let component: UserpackagelistComponent;
  let fixture: ComponentFixture<UserpackagelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpackagelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpackagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
