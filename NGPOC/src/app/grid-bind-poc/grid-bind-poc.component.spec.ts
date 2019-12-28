import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBindPOCComponent } from './grid-bind-poc.component';

describe('GridBindPOCComponent', () => {
  let component: GridBindPOCComponent;
  let fixture: ComponentFixture<GridBindPOCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridBindPOCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBindPOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
