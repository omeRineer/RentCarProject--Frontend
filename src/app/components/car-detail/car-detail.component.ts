import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Card } from 'src/app/models/card';
import { CarImage } from 'src/app/models/carImage';
import { Rent } from 'src/app/models/rent';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CardService } from 'src/app/services/card.service';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:Car
  carImages:CarImage[]
  card:Card

  rent:Rent 
  imgUrl="https://localhost:44337/"

  rentDate:Date
  returnDate:Date
  cardNumber:string
  cVV:number


  constructor(private toastrService:ToastrService, 
    private rentService:RentService, 
    private activatedRoute:ActivatedRoute,
    private carService:CarService,
    private carImageService:CarImageService,
    private cardService:CardService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"])
        this.getImageByCarId(params["carId"])
      }
    })
  }


  
  getCarById(carId:number){
    this.carService.getByCarId(carId).subscribe(response=>{
      this.car=response.data
    })
  }

  getImageByCarId(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response=>{
      this.carImages=response.data
    })
  }

  rentCar(){
    let rent:Rent={
      rentId:10,
      car:this.car.carId,
      customer:1,
      rentDate:this.rentDate,
      returnDate:this.returnDate,
      cardNumber:this.cardNumber,
      cVV:this.cVV
    }
    console.log(rent)
    this.rentService.add(rent).subscribe(Response=>{
      this.toastrService.success("Kiralama işlemi başarılı")
    },responseError=>{
      this.toastrService.error("Hata")
    })
  }
}
