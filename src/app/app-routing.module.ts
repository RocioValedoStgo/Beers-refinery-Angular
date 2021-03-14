import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewBeerComponent } from "./components/new-beer/new-beer.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'new-beer', component: NewBeerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
