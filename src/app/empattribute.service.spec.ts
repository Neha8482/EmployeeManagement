import { TestBed } from '@angular/core/testing';

import { EmpattributeService } from './empattribute.service';

describe('EmpattributeService', () => {
  let service: EmpattributeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpattributeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
