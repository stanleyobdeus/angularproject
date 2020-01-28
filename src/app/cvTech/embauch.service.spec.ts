import { TestBed } from '@angular/core/testing';

import { EmbauchService } from './embauch.service';

describe('EmbauchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmbauchService = TestBed.get(EmbauchService);
    expect(service).toBeTruthy();
  });
});
