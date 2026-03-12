import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Giphy } from './giphy';

describe('Giphy', () => {
  let component: Giphy;
  let fixture: ComponentFixture<Giphy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Giphy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Giphy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
