import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloadingwithdelayComponent } from './preloadingwithdelay.component';

describe('PreloadingwithdelayComponent', () => {
  let component: PreloadingwithdelayComponent;
  let fixture: ComponentFixture<PreloadingwithdelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloadingwithdelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloadingwithdelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
