import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenModalComponent } from './fullscreen-modal.component';

describe('FullscreenModalComponent', () => {
  let component: FullscreenModalComponent;
  let fixture: ComponentFixture<FullscreenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
