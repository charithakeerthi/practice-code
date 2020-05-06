import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepageViewComponent } from './singlepage-view.component';

describe('SinglepageViewComponent', () => {
  let component: SinglepageViewComponent;
  let fixture: ComponentFixture<SinglepageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
