import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxValidatorsComponent } from './ngx-validators.component';

describe('NgxValidatorsComponent', () => {
  let component: NgxValidatorsComponent;
  let fixture: ComponentFixture<NgxValidatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxValidatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
