import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StbTestComponent } from './stb-test.component';

describe('StbTestComponent', () => {
  let component: StbTestComponent;
  let fixture: ComponentFixture<StbTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StbTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StbTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
