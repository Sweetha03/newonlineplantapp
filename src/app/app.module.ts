import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { SeedPipe } from './seed-pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeedListComponent } from './seed-list/seed-list.component';
import { SeedDetailsComponent } from './seed-details/seed-details.component';
import { SeedFilterationsComponent } from './seed-filterations/seed-filterations.component';


const allLinks: Routes = [
  { path: 'launchseeds', component: AdminWorkComponent },
  { path: 'viewallseeds', component: UserComponent },
  { path: 'seedsInDB', component: SeedListComponent },
  { path: 'seedDetails', component: SeedDetailsComponent },
  { path: 'filterations', component: SeedFilterationsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    UserComponent,
    SeedPipe,
    SeedListComponent,
    SeedDetailsComponent,
    SeedFilterationsComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    FormsModule,
    RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
