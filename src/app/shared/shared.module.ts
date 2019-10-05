import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
