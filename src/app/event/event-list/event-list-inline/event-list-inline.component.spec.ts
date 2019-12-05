import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListInlineComponent } from './event-list-inline.component';
import { FormsModule } from '@angular/forms';
import { EventModule } from '../../event.module';
import { UserModule } from 'src/app/user/user.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EventListInlineComponent', () => {
  let component: EventListInlineComponent;
  let fixture: ComponentFixture<EventListInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports :[
        FormsModule,
        SharedModule,
        EventModule,
        UserModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
