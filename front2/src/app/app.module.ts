import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InscriptionComponent } from './inscription/inscription.component';
import { ListDemandeInscComponent } from './list-demande-insc/list-demande-insc.component';
import { AdminComponent } from './sideBare/sideBare.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormAjoutClientComponent } from './form-ajout-client/form-ajout-client.component';
import { CommuneComponent } from './commune/commune.component';
import { FormcommuneComponent } from './formcommune/formcommune.component';
import { UpdatecommuneComponent } from './updatecommune/updatecommune.component';
import { CliensideBareComponent } from './clienside-bare/clienside-bare.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { DemandeSignatureComponent } from './demande-signature/demande-signature.component';
import { ListeSignatureComponent } from './liste-signature/liste-signature.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashbordComponent } from './dashbord/dashbord.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ListeFonctioComponent } from './liste-fonctio/liste-fonctio.component';
import { AjoutFonctComponent } from './ajout-fonct/ajout-fonct.component';
import { UpdateFonctComponent } from './update-fonct/update-fonct.component';
import { ListeDemandModifComponent } from './liste-demand-modif/liste-demand-modif.component';
import { LoginClientComponent } from './login-client/login-client.component';

import { SignComponent } from './sign/sign.component';
import { DemandeModifComponent } from './demande-modif/demande-modif.component';
import { DemandeCopieComponent } from './demande-copie/demande-copie.component';
import { Home2Component } from './home2/home2.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { DashInscriptionParVilleComponent } from './dash-inscription-par-ville/dash-inscription-par-ville.component';
import { DashSignaComponent } from './dash-signa/dash-signa.component';




@NgModule({
  declarations: [
    AppComponent,

    InscriptionComponent,
    ListDemandeInscComponent,
    AdminComponent,
    ListeClientComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FormAjoutClientComponent,
    CommuneComponent,
    FormcommuneComponent,
    UpdatecommuneComponent,
    CliensideBareComponent,
    ProfilClientComponent,
    DemandeSignatureComponent,
    ListeSignatureComponent,
    DashbordComponent,
    UpdateClientComponent,
    ListeFonctioComponent,
    AjoutFonctComponent,
    UpdateFonctComponent,
    ListeDemandModifComponent,
    LoginClientComponent,

    SignComponent,
    DemandeModifComponent,
    DemandeCopieComponent,
    Home2Component,
    ReclamationComponent,
    SendmailComponent,
    DashInscriptionParVilleComponent,
    DashSignaComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HighchartsChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
