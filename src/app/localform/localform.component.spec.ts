import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalformComponent } from './localform.component';

describe('LocalformComponent', () => {
  let component: LocalformComponent;
  let fixture: ComponentFixture<LocalformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
