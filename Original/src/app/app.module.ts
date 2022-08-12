import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ManageAccountsComponent } from './manage-accounts/manage-accounts.component';
import { DepositFundsComponent } from './deposit-funds/deposit-funds.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    ManageAccountsComponent,
    DepositFundsComponent,
    TransferFundsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
