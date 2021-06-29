import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackzComponent } from './trackz.component';

describe('TrackzComponent', () => {
  let component: TrackzComponent;
  let fixture: ComponentFixture<TrackzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
