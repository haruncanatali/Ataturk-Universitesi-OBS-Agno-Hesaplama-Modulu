import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerslerComponent } from './dersler.component';

describe('DerslerComponent', () => {
  let component: DerslerComponent;
  let fixture: ComponentFixture<DerslerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerslerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DerslerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
