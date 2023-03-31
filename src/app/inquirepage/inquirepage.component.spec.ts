import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirepageComponent } from './inquirepage.component';

describe('InquirepageComponent', () => {
  let component: InquirepageComponent;
  let fixture: ComponentFixture<InquirepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquirepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquirepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
