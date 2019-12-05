import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialButtonModule } from './material-button/material-button.module';
import { MaterialIconneModule } from './material-icone/material-icone.module';
import { MaterialPaginatorModule } from './material-paginator/material-paginator.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialButtonModule,
    MaterialIconneModule,
    MaterialPaginatorModule
  ],
  exports: [MaterialButtonModule, MaterialIconneModule, MaterialPaginatorModule]
})
export class MaterialModule { }

