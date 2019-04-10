import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { UpdatesComponent } from './updates/updates.component';
import { RemindersComponent } from './reminders/reminders.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { AskGusComponent } from './ask-gus/ask-gus.component';
import { SymptomCheckerComponent } from './symptom-checker/symptom-checker.component';
import { InfoCentreComponent } from './info-centre/info-centre.component';
import { AboutComponent } from './about/about.component';
import { FindDrComponent } from './find-dr/find-dr.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdatesComponent,
    RemindersComponent,
    TreatmentsComponent,
    AskGusComponent,
    SymptomCheckerComponent,
    InfoCentreComponent,
    AboutComponent,
    FindDrComponent,
    NavComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
