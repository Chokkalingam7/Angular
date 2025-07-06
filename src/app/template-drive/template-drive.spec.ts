import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrive } from './template-drive';

describe('TemplateDrive', () => {
  let component: TemplateDrive;
  let fixture: ComponentFixture<TemplateDrive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
