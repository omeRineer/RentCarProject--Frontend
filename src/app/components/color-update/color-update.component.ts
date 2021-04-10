import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import {FormBuilder,FormGroup,FormControl,Validator,Validators} from "@angular/forms"

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  color:Color
  updateColorForm:FormGroup
  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getByColorId(params["colorId"])
      }
    })
    this.createColorUpdateForm()
  }

  createColorUpdateForm(){
    this.updateColorForm=this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }

  getByColorId(colorId:number){
    this.colorService.getByColorId(colorId).subscribe(response=>{
      this.color=response.data
    })
  }

  update(){
    if(this.updateColorForm.valid){
      this.colorService.update(this.color).subscribe(response=>{
      this.toastrService.success("Renk bilgisi güncellendi","Başarılı")
    },responseError=>{
      for (let i = 0; i < responseError.error.Errors.length; i++) {
        this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Hata")
      }
    })
    }else{
      this.toastrService.error("Eksik bilgi","Hata")
    }
    
  }
}
