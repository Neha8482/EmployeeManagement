import { TestBed } from '@angular/core/testing';

import { IncepterService } from './incepter.service';

describe('IncepterService', () => {
  let service: IncepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
