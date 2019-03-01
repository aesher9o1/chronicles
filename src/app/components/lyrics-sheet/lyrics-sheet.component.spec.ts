import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsSheetComponent } from './lyrics-sheet.component';

describe('LyricsSheetComponent', () => {
  let component: LyricsSheetComponent;
  let fixture: ComponentFixture<LyricsSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricsSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricsSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
