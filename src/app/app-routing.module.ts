import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AskGusComponent } from './ask-gus/ask-gus.component';
import { InfoCentreComponent } from './info-centre/info-centre.component';
import { AboutComponent } from './about/about.component';
import { RemindersComponent } from './reminders/reminders.component';
import { SymptomCheckerComponent } from './symptom-checker/symptom-checker.component';
import { UpdatesComponent } from './updates/updates.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { FindDrComponent } from './find-dr/find-dr.component';

const routes: Routes = [
  {path: '',component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path: 'updates',component : UpdatesComponent},
  {path : 'treatments', component : TreatmentsComponent},
  {path: 'askGus',component : AskGusComponent},
  {path : 'InfoCentre', component : InfoCentreComponent},
  {path: 'reminders',component : RemindersComponent},
  {path : 'symptomChecker', component : SymptomCheckerComponent},
  {path : 'findDr',component : FindDrComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
