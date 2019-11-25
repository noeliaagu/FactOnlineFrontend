import { TestBed } from '@angular/core/testing';

import { FactRepoService } from './fact-repo.service';

describe('FactRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactRepoService = TestBed.get(FactRepoService);
    expect(service).toBeTruthy();
  });
});
