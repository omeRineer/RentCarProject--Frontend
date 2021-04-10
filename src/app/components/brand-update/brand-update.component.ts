import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validator,Validators} from "@angular/forms"
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  updateBrandForm:FormGroup
  brand:Brand
  constructor(private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getBrand(params["brandId"])
      }
    })
    this.createUpdateBrandForm()
  }

  createUpdateBrandForm(){
    this.updateBrandForm=this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }

  getBrand(id:number){
    this.brandService.getById(id).subscribe(response=>{
      this.brand=response.data
    })
  }

  update(){
    if(this.updateBrandForm.valid){
      this.brandService.update(this.brand).subscribe(response=>{
        this.toastrService.success("Marka güncellendi","Başarılı")
      },responseError=>{
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Hata")
          
        }
      })
    }
  }
}
