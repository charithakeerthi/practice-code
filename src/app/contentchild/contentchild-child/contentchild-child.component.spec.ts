import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildChildComponent } from './contentchild-child.component';

describe('ContentchildChildComponent', () => {
  let component: ContentchildChildComponent;
  let fixture: ComponentFixture<ContentchildChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentchildChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentchildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
