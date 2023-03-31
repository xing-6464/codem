import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectpageComponent } from './collectpage.component';

describe('CollectpageComponent', () => {
  let component: CollectpageComponent;
  let fixture: ComponentFixture<CollectpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
