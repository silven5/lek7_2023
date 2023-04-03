import { TestBed } from '@angular/core/testing';

import { FrirebaseTodoService } from './frirebase-todo.service';

describe('FrirebaseTodoService', () => {
  let service: FrirebaseTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrirebaseTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
