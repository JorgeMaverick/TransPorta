import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TripComponent } from '../components/trip/trip.component';
import { MapComponent } from '../components/map/map.component';
import { AdminComponent } from '../components/admin/admin.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { AnalyticsComponent } from '../components/analytics/analytics.component';



const routes: Routes = [
  {path: 'admin',
   component: AdminComponent,
  },{
    path: 'map',
   component: MapComponent,
  },
  {
    path:'trip',
    component:TripComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'analytics',
    component:AnalyticsComponent
  },
   {
    redirectTo:'admin',
    path:'',
    pathMatch:'full'
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRouterModule {
}
