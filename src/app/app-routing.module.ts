import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsComponent } from './components/gifs/gifs.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'outcome/:searchString', component: GifsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
