import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormatsListPage } from './formats-list.page';

describe('FormatsListPage', () => {
  let component: FormatsListPage;
  let fixture: ComponentFixture<FormatsListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormatsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
