import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBeerComponent } from './components/edit-beer/edit-beer.component';
import { HomeComponent } from './components/home/home.component';
import { NewBeerComponent } from "./components/new-beer/new-beer.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-beer', component: NewBeerComponent },
  { path: 'edit-beer/:id', component: EditBeerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
