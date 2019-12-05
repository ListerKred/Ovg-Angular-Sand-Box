import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListToggleComponent } from './event-list-toggle.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventModule } from '../../event.module';
import { UserModule } from 'src/app/user/user.module';

describe('EventListToggleComponent', () => {
  let component: EventListToggleComponent;
  let fixture: ComponentFixture<EventListToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports :[
        FormsModule,
        SharedModule,
        EventModule,
        UserModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
