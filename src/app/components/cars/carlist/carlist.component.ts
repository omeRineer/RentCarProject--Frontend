import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {

  cars:Car[]
  constructor(private carService:CarService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.carService.getAllByDto().subscribe(response=>{
      this.cars=response.data
    })
  }

  delete(car:Car){
    this.carService.delete(car).subscribe(response=>{
      this.toastrService.success("Araba silindi","Başarılı")
    })
  }
}
