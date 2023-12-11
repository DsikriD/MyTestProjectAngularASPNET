import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittypeComponent } from './edittype.component';

describe('EdittypeComponent', () => {
  let component: EdittypeComponent;
  let fixture: ComponentFixture<EdittypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
