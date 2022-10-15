import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEpisodeComponent } from './HealthAssistant/new-episode/new-episode.component';
import { HomeComponent } from './HealthAssistant/home/home.component';
import { PatientComponent } from './HealthAssistant/patient/patient.component';
import { ProfileComponent } from './HealthAssistant/profile/profile.component';
import { NewServiceComponent } from './HealthAssistant/new-service/new-service.component';
import { BillComponent } from './HealthAssistant/bill/bill.component';
import { MdComponent } from './Doctor/md/md.component';
import { PatientDetailsComponent } from './Doctor/patient-details/patient-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bill', component: BillComponent },
  { path: 'new-episode', component: NewEpisodeComponent },  
  { path: 'patient', component: PatientComponent },  
  { path: 'profile', component: ProfileComponent },  
  { path: 'new-service', component: NewServiceComponent },  
  { path: 'doctor/md', component: MdComponent },
  { path: 'doctor/patient-details', component: PatientDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
