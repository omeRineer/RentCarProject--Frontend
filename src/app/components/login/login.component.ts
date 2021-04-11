import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator,Validators } from "@angular/forms";
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private authService:AuthService,private toastrService:ToastrService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      let loginModel=Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.success(response.message)
        localStorage.setItem("token",response.data.token)
      },responseError=>{
        this.toastrService.error(responseError.error);
        
      })
    }
  }
}
