import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarihealthComponent } from './amarihealth.component';

describe('AmarihealthComponent', () => {
  let component: AmarihealthComponent;
  let fixture: ComponentFixture<AmarihealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmarihealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmarihealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
