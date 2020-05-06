import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildrenChildComponent } from './contentchildren-child.component';

describe('ContentchildrenChildComponent', () => {
  let component: ContentchildrenChildComponent;
  let fixture: ComponentFixture<ContentchildrenChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentchildrenChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentchildrenChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
