import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { AddMotoComponent } from './add-moto/add-moto.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { AddMarqueMotoComponent } from './add-marque-moto/add-marque-moto.component';
import { AddMarqueVoitureComponent } from './add-marque-voiture/add-marque-voiture.component';
import { VoituresComponent } from './voitures/voitures.component';
import { MotosComponent } from './motos/motos.component';
import { MarqueVoitureComponent } from './marque-voiture/marque-voiture.component';
import { MarqueMotoComponent } from './marque-moto/marque-moto.component';
import { EditVoitureComponent } from './edit-voiture/edit-voiture.component';
import { EditMotoComponent } from './edit-moto/edit-moto.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailMotoComponent } from './detail-moto/detail-moto.component';
import { DetailVoitureComponent } from './detail-voiture/detail-voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddMotoComponent,
    AddVoitureComponent,
    AddMarqueMotoComponent,
    AddMarqueVoitureComponent,
    VoituresComponent,
    MotosComponent,
    MarqueVoitureComponent,
    MarqueMotoComponent,
    EditVoitureComponent,
    EditMotoComponent,
    DetailMotoComponent,
    DetailVoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
