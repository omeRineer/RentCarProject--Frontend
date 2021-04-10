import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validator,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup
  constructor(private colorService:ColorService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createColorAddForm()
  }

  createColorAddForm(){
    this.colorAddForm=this.formBuilder.group({
      colorName:["",Validators.required]
    })
  }

  add(){
    if(this.colorAddForm.valid){
      let colorModel=Object.assign(this.colorAddForm.value)
      this.colorService.add(colorModel).subscribe(response=>{
        this.toastrService.success("Renk eklendi","Başarılı")
      },responseError=>{
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[0].ErrorMessage,"Hata")
        }
    })
  }
}
}
