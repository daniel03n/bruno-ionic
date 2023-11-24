import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormatsDetailsPage } from './formats-details.page';

describe('FormatsDetailsPage', () => {
  let component: FormatsDetailsPage;
  let fixture: ComponentFixture<FormatsDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormatsDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
