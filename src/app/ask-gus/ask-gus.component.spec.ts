import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskGusComponent } from './ask-gus.component';

describe('AskGusComponent', () => {
  let component: AskGusComponent;
  let fixture: ComponentFixture<AskGusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskGusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskGusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
