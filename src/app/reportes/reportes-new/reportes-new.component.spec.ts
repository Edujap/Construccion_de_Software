import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesNewComponent } from './reportes-new.component';

describe('ReportesNewComponent', () => {
  let component: ReportesNewComponent;
  let fixture: ComponentFixture<ReportesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
