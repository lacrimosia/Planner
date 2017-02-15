/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputTasksComponent } from './input-tasks.component';

describe('InputTasksComponent', () => {
  let component: InputTasksComponent;
  let fixture: ComponentFixture<InputTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
