import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildParentComponent } from './contentchild-parent.component';

describe('ContentchildParentComponent', () => {
  let component: ContentchildParentComponent;
  let fixture: ComponentFixture<ContentchildParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentchildParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentchildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
