import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialvalidationComponent } from './materialvalidation.component';

describe('MaterialvalidationComponent', () => {
  let component: MaterialvalidationComponent;
  let fixture: ComponentFixture<MaterialvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
