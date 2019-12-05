import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from './toolbar/toolbar.module';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolbarModule,
    MaterialModule,
  ],
  exports: [ToolbarModule, MaterialModule]
})
export class SharedModule { }
