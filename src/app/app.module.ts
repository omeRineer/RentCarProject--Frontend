import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from "@angular/common/http";
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import {ToastrModule} from "ngx-toastr"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentComponent } from './components/rent/rent.component';
import { CarComponent } from './components/cars/car/car.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { BrandPipe } from './pipes/brand.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandlistComponent } from './components/brand/brandlist/brandlist.component';
import { ColorlistComponent } from './components/color/colorlist/colorlist.component';
import { CarlistComponent } from './components/cars/carlist/carlist.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    RentComponent,
    CarComponent,
    HomePageComponent,
    CarDetailComponent,
    CarFilterPipe,
    ColorPipe,
    BrandPipe,
    FilterComponent,
    CarAddComponent,
    ColorAddComponent,
    BrandAddComponent,
    BrandlistComponent,
    ColorlistComponent,
    CarlistComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
