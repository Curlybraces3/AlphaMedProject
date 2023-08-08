import { TestBed } from '@angular/core/testing';

import { AmarihealthService } from './amarihealth.service';

describe('AmarihealthService', () => {
  let service: AmarihealthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmarihealthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
