import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { MapComponent } from './components/map/map.component';
import { TripComponent } from './components/trip/trip.component';
import { HomeRouterModule } from './router/home-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { TrucksComponent } from './components/trucks/trucks.component';

//import {MatExpansionModule} from '@angular/material/expansion';
//import { AgmCoreModule } from '@agm/core';



@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AdminComponent,
    MapComponent,
    TripComponent,
    ProfileComponent,
    AnalyticsComponent,
    TrucksComponent
  ]
})
export class HomeModule { }
