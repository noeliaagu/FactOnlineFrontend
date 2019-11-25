import { TestBed } from '@angular/core/testing';

import { CliRepoService } from './cli-repo.service';

describe('CliRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CliRepoService = TestBed.get(CliRepoService);
    expect(service).toBeTruthy();
  });
});
