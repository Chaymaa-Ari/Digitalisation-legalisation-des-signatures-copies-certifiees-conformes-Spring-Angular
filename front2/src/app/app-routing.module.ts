import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListDemandeInscComponent } from './list-demande-insc/list-demande-insc.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminComponent } from './sideBare/sideBare.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormAjoutClientComponent } from './form-ajout-client/form-ajout-client.component';
import { CommuneComponent } from './commune/commune.component';
import { UpdatecommuneComponent } from './updatecommune/updatecommune.component';
import { CliensideBareComponent } from './clienside-bare/clienside-bare.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';
import { DemandeSignatureComponent } from './demande-signature/demande-signature.component';
import { ListeSignatureComponent } from './liste-signature/liste-signature.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ListeFonctioComponent } from './liste-fonctio/liste-fonctio.component';
import { AjoutFonctComponent } from './ajout-fonct/ajout-fonct.component';
import { UpdateFonctComponent } from './update-fonct/update-fonct.component';
import { ListeDemandModifComponent } from './liste-demand-modif/liste-demand-modif.component';
import { LoginClientComponent } from './login-client/login-client.component';

import { DemandeModifComponent } from './demande-modif/demande-modif.component';
import { SignComponent } from './sign/sign.component';
import { DemandeCopieComponent } from './demande-copie/demande-copie.component';
import { SendmailComponent } from './sendmail/sendmail.component';


const routes: Routes = [
{path:'demande' , component: ListDemandeInscComponent },

{path:'inscrire' , component :InscriptionComponent},
{path:'admin' , component: AdminComponent},
{path:'listecli' , component :ListeClientComponent},
{path:'login' , component :LoginComponent},
{path:'home' , component :HomeComponent},
{path:'navbar', component:NavbarComponent},
{path:'listComune', component:CommuneComponent},
{path:'ajoutClient/:id', component:FormAjoutClientComponent},
{path:'updatecom/:id',component:UpdatecommuneComponent},
{path:'clientDash',component:CliensideBareComponent},
{path:'profil',component:ProfilClientComponent},
{path:'demandesignature',component:DemandeSignatureComponent},
{path:'listeSignature',component:ListeSignatureComponent},
{path:'listeFonc',component:ListeFonctioComponent},
{path:'listeModif',component:ListeDemandModifComponent},
{path:'ajoutFonc',component:AjoutFonctComponent},
{path:'updateClient/:id',component:UpdateClientComponent},
{path:'updateFonct/:id',component:UpdateFonctComponent},
{path:'logincl',component:LoginClientComponent},
{path:'demandeModif',component:DemandeModifComponent},
{path:'copie',component:DemandeCopieComponent},
{path:'sign/:id',component:SignComponent},
{path:'sendemail',component:SendmailComponent},

{path:'',redirectTo:'/home' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
