/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddTaskService } from './add-task.service';

describe('Service: AddTask', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddTaskService]
    });
  });

  it('should ...', inject([AddTaskService], (service: AddTaskService) => {
    expect(service).toBeTruthy();
  }));
});
