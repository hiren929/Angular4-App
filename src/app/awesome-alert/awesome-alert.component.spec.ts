import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeAlertComponent } from './awesome-alert.component';

describe('AwesomeAlertComponent', () => {
  let component: AwesomeAlertComponent;
  let fixture: ComponentFixture<AwesomeAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
