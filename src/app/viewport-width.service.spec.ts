import { TestBed } from '@angular/core/testing';

import { ViewportWidthService } from './viewport-width.service';

describe('ViewportWidthService', () => {
  let service: ViewportWidthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewportWidthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
