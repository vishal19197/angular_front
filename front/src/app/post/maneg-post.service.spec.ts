import { TestBed } from '@angular/core/testing';

import { ManegPostService } from './maneg-post.service';

describe('ManegPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManegPostService = TestBed.get(ManegPostService);
    expect(service).toBeTruthy();
  });
});
