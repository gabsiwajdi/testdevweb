import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseusComponent } from './choseus.component';

describe('ChoseusComponent', () => {
  let component: ChoseusComponent;
  let fixture: ComponentFixture<ChoseusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoseusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoseusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
