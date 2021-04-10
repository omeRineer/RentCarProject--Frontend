import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,Validator} from "@angular/forms"
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {


  updateCarForm:FormGroup
  car:Car
  constructor(private carService:CarService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getById(params["carId"])
      }
    })
    this.createUpdateCarForm()

  }

  createUpdateCarForm(){
    this.updateCarForm=this.formBuilder.group({
      carBrand:["",Validators.required],
      carColor:["",Validators.required],
      carModelYear:["",Validators.required],
      carDailyPrice:["",Validators.required],
      carDescription:["",Validators.required]
    })
  }

  getById(carId:number){
    this.carService.getById(carId).subscribe(response=>{
      this.car=response.data
    })
  }

  update(){
    if(this.updateCarForm.valid){
      this.carService.update(this.car).subscribe(response=>{
        this.toastrService.success("Araba bilgileri güncellendi","Başarılı")
      },responseError=>{
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Hata")
        }
      })
    }else{
      this.toastrService.error("Eksik form","Hata")
    }
  }

}
