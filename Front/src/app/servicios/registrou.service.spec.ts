import { TestBed } from '@angular/core/testing';

import { RegistrouService } from './registrou.service';

describe('RegistrouService', () => {
  let service: RegistrouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
