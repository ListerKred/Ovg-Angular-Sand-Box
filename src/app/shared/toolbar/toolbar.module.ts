import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
