import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    // No hay dos importaciones carga el que ya tenga en memoria
    // En este caso del AppRoutingModule
    RouterModule
  ]
})
export class SharedModule { }
