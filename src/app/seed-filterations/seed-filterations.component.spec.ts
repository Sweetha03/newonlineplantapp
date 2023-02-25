import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedFilterationsComponent } from './seed-filterations.component';

describe('SeedFilterationsComponent', () => {
  let component: SeedFilterationsComponent;
  let fixture: ComponentFixture<SeedFilterationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedFilterationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedFilterationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
