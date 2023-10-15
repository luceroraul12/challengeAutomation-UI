import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
