import { TestBed } from '@angular/core/testing';

import { DerslerService } from './dersler.service';

describe('DerslerService', () => {
  let service: DerslerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DerslerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
