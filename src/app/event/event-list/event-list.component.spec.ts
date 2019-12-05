import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventModule } from '../event.module';
import { UserModule } from 'src/app/user/user.module';
import { HttpClientModule } from '@angular/common/http';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports :[
        FormsModule,
        SharedModule,
        EventModule,
        UserModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
