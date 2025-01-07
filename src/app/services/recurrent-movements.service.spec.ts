import { TestBed } from '@angular/core/testing';

import { RecurrentMovementsService } from './recurrent-movements.service';

describe('RecurrentMovementsService', () => {
  let service: RecurrentMovementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecurrentMovementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
