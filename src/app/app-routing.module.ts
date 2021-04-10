import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandlistComponent } from './components/brand/brandlist/brandlist.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/cars/car/car.component';
import { CarlistComponent } from './components/cars/carlist/carlist.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { ColorlistComponent } from './components/color/colorlist/colorlist.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RentComponent } from './components/rent/rent.component';

const routes: Routes = [
  {path:"rents",component:RentComponent},

  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},

  {path:"cars/cardetail/:carId",component:CarDetailComponent},

  {path:"cars/caradd",component:CarAddComponent},
  {path:"brands/brandadd",component:BrandAddComponent},
  {path:"colors/coloradd",component:ColorAddComponent},

  {path:"cars/carlist",component:CarlistComponent},
  {path:"colors/colorlist",component:ColorlistComponent},
  {path:"brands/brandlist",component:BrandlistComponent},

  {path:"cars/carupdate/:carId",component:CarUpdateComponent},
  {path:"brands/brandupdate/:brandId",component:BrandUpdateComponent},
  {path:"colors/colorupdate/:colorId",component:ColorUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
