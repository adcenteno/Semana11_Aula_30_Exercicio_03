import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GifsComponent } from './gifs/gifs.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent,GifsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [HomeComponent,GifsComponent,FormsModule],
})
export class ComponentsModule { }