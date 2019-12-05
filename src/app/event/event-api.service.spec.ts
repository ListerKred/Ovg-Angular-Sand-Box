import { TestBed } from '@angular/core/testing';

import { EventApiService } from './event-api.service';
import { AppComponent } from '../app.component';
import { EventModule } from './event.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';
import { HttpClientModule } from '@angular/common/http';

describe('EventApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
    ],
    imports : [
      EventModule,
      SharedModule,
      FormsModule,
      RouterModule,
      UserModule,
      HttpClientModule,
    ]
  }));

  it('should be created', () => {
    const service: EventApiService = TestBed.get(EventApiService);
    expect(service).toBeTruthy();
  });
});
