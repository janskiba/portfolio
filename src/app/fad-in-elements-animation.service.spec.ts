import { TestBed } from '@angular/core/testing';

import { FadInElementsAnimationService } from './fade-in-elements-animation.service';

describe('FadInElementsAnimationService', () => {
  let service: FadInElementsAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FadInElementsAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
