import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshComponent } from './ash.component';

describe('AshComponent', () => {
  let component: AshComponent;
  let fixture: ComponentFixture<AshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
