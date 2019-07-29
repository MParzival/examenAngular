import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VoituresComponent} from './voitures/voitures.component';
import {AddVoitureComponent} from './add-voiture/add-voiture.component';
import {EditVoitureComponent} from './edit-voiture/edit-voiture.component';
import {MotosComponent} from './motos/motos.component';
import {AddMotoComponent} from './add-moto/add-moto.component';
import {EditMotoComponent} from './edit-moto/edit-moto.component';
import {MarqueVoitureComponent} from './marque-voiture/marque-voiture.component';
import {AddMarqueVoitureComponent} from './add-marque-voiture/add-marque-voiture.component';
import {MarqueMotoComponent} from './marque-moto/marque-moto.component';
import {AddMarqueMotoComponent} from './add-marque-moto/add-marque-moto.component';
import {DetailVoitureComponent} from './detail-voiture/detail-voiture.component';
import {DetailMotoComponent} from './detail-moto/detail-moto.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'voitures',      component: VoituresComponent},
  { path: 'add-voiture',      component: AddVoitureComponent},
  { path: 'detail-voiture/:id',      component: DetailVoitureComponent},
  { path: 'edit-voiture/:id',      component: EditVoitureComponent},
  { path: 'motos',      component: MotosComponent},
  { path: 'add-moto',      component: AddMotoComponent},
  { path: 'detail-moto/:id',      component: DetailMotoComponent},
  { path: 'edit-moto/:id',      component: EditMotoComponent},
  { path: 'marque-voiture',      component: MarqueVoitureComponent},
  { path: 'add-marque-voiture',      component: AddMarqueVoitureComponent},
  { path: 'marque-moto',      component: MarqueMotoComponent},
  { path: 'add-marque-moto',      component: AddMarqueMotoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
