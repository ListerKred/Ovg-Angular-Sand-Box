import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListCardComponent } from './event-list-card.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventModule } from '../../event.module';
import { UserModule } from 'src/app/user/user.module';

describe('EventListCardComponent', () => {
  let component: EventListCardComponent;
  let fixture: ComponentFixture<EventListCardComponent>;

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
    fixture = TestBed.createComponent(EventListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
