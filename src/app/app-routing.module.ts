import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/cars/car/car.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RentComponent } from './components/rent/rent.component';

const routes: Routes = [
  {path:"rents",component:RentComponent},

  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},

  {path:"cars/cardetail/:carId",component:CarDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
