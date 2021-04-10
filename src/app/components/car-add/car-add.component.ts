import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validator,Validators} from "@angular/forms"
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm()
  }

  createCarAddForm(){
    this.carAddForm=this.formBuilder.group({
      carBrand:["",Validators.required],
      carColor:["",Validators.required],
      carModelYear:["",Validators.required],
      carDailyPrice:["",Validators.required],
      carDescription:["",Validators.required]
    })
  }

  add(){
    if(this.carAddForm.valid){
      let carModel=Object.assign(this.carAddForm.value)
    this.carService.add(carModel).subscribe(response=>{
      this.toastrService.success("Araba eklendi","Başarılı")
    },responseError=>{
      for (let i = 0; i < responseError.error.Errors.length; i++) {
        this.toastrService.error(responseError.error.Errors[0].ErrorMessage,"Hata")
      }
      
    })
    }else{
      this.toastrService.error("Formunuz eksik","Hata")
    }
    
  }
}
