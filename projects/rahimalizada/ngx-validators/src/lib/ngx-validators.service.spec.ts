import { TestBed } from '@angular/core/testing';

import { NgxValidatorsService } from './ngx-validators.service';

describe('NgxValidatorsService', () => {
  let service: NgxValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
