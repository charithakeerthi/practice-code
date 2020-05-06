import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerloadingComponent } from './eagerloading.component';

describe('EagerloadingComponent', () => {
  let component: EagerloadingComponent;
  let fixture: ComponentFixture<EagerloadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerloadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
