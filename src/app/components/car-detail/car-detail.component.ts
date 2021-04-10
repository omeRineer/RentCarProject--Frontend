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

  cars:Car[]=[]
  carImages:CarImage[]
  card:Card
  imgUrl="https://localhost:44337/"

  cardExist:boolean

  cardNumber:string
  cVV:number

  car:number
  customer:number
  rentDate:Date
  returnDate:Date

  //kiralama ve teslim tarihi backendde otomatik olarak ayarlandı burası refactor edilecek
  constructor(private toastrService:ToastrService, private rentService:RentService, private activatedRoute:ActivatedRoute,private carService:CarService,private carImageService:CarImageService,private cardService:CardService) { }

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
      this.cars=response.data
    })
  }

  getImageByCarId(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response=>{
      this.carImages=response.data
    })
  }

  async rentCar(){
     let card:Card={
      cardNumber:this.cardNumber,
      cVV:this.cVV,
      cardId:null
    }
    let rent:Rent={
      car:this.cars[0].carId,
      customer:1,
      rentDate:null,
      returnDate:null,
      rentId:null
    }
    this.rentService.add(rent).subscribe(response=>{
      this.toastrService.success("Araba Kiralama işlemi başarılı")
    })

    // this.cardExist= await this.isCardExist(card)
    // if(this.cardExist){
      
      
    // }
  }

  async isCardExist(card:Card){
    return (await this.cardService.isCardExist(card).toPromise()).success
  }
}
