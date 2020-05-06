import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildrenParentComponent } from './contentchildren-parent.component';

describe('ContentchildrenParentComponent', () => {
  let component: ContentchildrenParentComponent;
  let fixture: ComponentFixture<ContentchildrenParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentchildrenParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentchildrenParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
