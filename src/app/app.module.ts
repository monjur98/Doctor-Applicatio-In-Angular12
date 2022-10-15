import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HeaderComponent } from './common/header/header.component';
import { NewEpisodeComponent } from './HealthAssistant/new-episode/new-episode.component';
import { HomeComponent } from './HealthAssistant/home/home.component';
import { PatientComponent } from './HealthAssistant/patient/patient.component';
import { ProfileComponent } from './HealthAssistant/profile/profile.component';
import { NewServiceComponent } from './HealthAssistant/new-service/new-service.component';
import { BillComponent } from './HealthAssistant/bill/bill.component';
import { MdComponent } from './Doctor/md/md.component';
import { PatientDetailsComponent } from './Doctor/patient-details/patient-details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEpisodeComponent,
    HeaderComponent,
    HomeComponent,
    PatientComponent,
    ProfileComponent,
    NewServiceComponent,
    BillComponent,
    MdComponent,
    PatientDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ButtonModule,
    TabViewModule,
    ToggleButtonModule,
    DividerModule,
    TableModule,
    CardModule,
    ToastModule,
    DialogModule,
    AccordionModule,
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    MultiSelectModule,
    InputTextareaModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
