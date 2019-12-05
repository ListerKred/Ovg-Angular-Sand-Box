import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignupComponent } from './user-signup.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventModule } from 'src/app/event/event.module';
import { UserModule } from '../../user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserSignupComponent', () => {
  let component: UserSignupComponent;
  let fixture: ComponentFixture<UserSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
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
    fixture = TestBed.createComponent(UserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
