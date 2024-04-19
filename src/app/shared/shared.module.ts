import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from '../materials/materials.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';



@NgModule({
  declarations: [
    MenuComponent,
  
  ],
  exports:[
    MenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialsModule
  ],providers:[
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}

  ]
})
export class SharedModule { }