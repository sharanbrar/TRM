import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TransactionsDashboardPage } from '../pages/transactions-dashboard/transactions-dashboard';
import { DashboardFloatMenusPage } from '../pages/dashboard-float-menus/dashboard-float-menus';
import { HouseTeamPage } from '../pages/house-team/house-team';
import { ChecklistPage } from '../pages/checklist/checklist';
import { NotesPage } from '../pages/notes/notes';
import { EditNotesPage } from '../pages/edit-notes/edit-notes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TransactionsDashboardPage,
    DashboardFloatMenusPage,
    HouseTeamPage,
    ChecklistPage,
    NotesPage,
    EditNotesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransactionsDashboardPage,
    DashboardFloatMenusPage,
    HouseTeamPage,
    ChecklistPage,
    NotesPage,
    EditNotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
