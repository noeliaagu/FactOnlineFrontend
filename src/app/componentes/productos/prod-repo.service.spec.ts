import { TestBed } from '@angular/core/testing';

import { ProdRepoService } from './prod-repo.service';

describe('ProdRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdRepoService = TestBed.get(ProdRepoService);
    expect(service).toBeTruthy();
  });
});
