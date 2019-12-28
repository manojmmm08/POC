import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsingModelValidationComponent } from './form-using-model-validation.component';

describe('FormUsingModelValidationComponent', () => {
  let component: FormUsingModelValidationComponent;
  let fixture: ComponentFixture<FormUsingModelValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUsingModelValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUsingModelValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
