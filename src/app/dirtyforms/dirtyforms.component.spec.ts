import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyformsComponent } from './dirtyforms.component';

describe('DirtyformsComponent', () => {
  let component: DirtyformsComponent;
  let fixture: ComponentFixture<DirtyformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirtyformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirtyformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
