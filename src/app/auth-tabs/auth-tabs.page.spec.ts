import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTabsPage } from './auth-tabs.page';

describe('AuthTabsPage', () => {
  let component: AuthTabsPage;
  let fixture: ComponentFixture<AuthTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
