import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]
  filterText=""
  imgUrl="https://localhost:44337/"
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getAllByBrand(params["brandId"])
      }else if(params["brandId"] && params["colorId"]){
        this.getByColorAndBrandId(params["colorId"],params["brandId"])
      }else if(params["colorId"]){
        this.getAllByColor(params["colorId"])
      }else{
        this.getAllByDto()
      }
    })
    
  }

  getAll(){
    this.carService.getAll().subscribe(response=>{
      this.cars=response.data
    })
  }

  getAllByDto(){
    this.carService.getAllByDto().subscribe(response=>{
      this.cars=response.data
    })
  }

  getAllByBrand(brandId:number){
    this.carService.getAllByBrand(brandId).subscribe(response=>{
      this.cars=response.data
    })
  }

  getAllByColor(colorId:number){
    this.carService.getAllByColor(colorId).subscribe(response=>{
      this.cars=response.data
    })
  }

  getByColorAndBrandId(colorId:number,brandId:number){
    this.carService.getByColorAndBrandId(colorId,brandId).subscribe(response=>{
      if(response.data){
        this.cars=response.data
      }else{
        this.cars=null
      }
    })
  }
}
