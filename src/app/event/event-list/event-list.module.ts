import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatTableModule, MatFormFieldModule } from '@angular/material';
import { EventListCardComponent } from './event-list-card/event-list-card.component';
import { EventListToggleComponent } from './event-list-toggle/event-list-toggle.component';
import { EventListInlineComponent } from './event-list-inline/event-list-inline.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [EventListCardComponent, EventListToggleComponent, EventListInlineComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MaterialModule
  ],
  exports: [EventListCardComponent, EventListToggleComponent, EventListInlineComponent]
})
export class EventListModule { }
