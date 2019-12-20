/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoxChoiceComponent } from './box-choice.component';

describe('BuilderComponent', () => {
  let component: BoxChoiceComponent;
  let fixture: ComponentFixture<BoxChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoxChoiceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
