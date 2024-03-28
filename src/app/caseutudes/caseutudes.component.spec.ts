import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseutudesComponent } from './caseutudes.component';

describe('CaseutudesComponent', () => {
  let component: CaseutudesComponent;
  let fixture: ComponentFixture<CaseutudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseutudesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseutudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
