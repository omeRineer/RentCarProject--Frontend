import { Component, OnInit } from '@angular/core';
import { Rent } from 'src/app/models/rent';
import { RentDto } from 'src/app/models/rentDto';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  rents:Rent[]
  rentDtos:RentDto[]
  constructor(private rentService:RentService) { }

  ngOnInit(): void {
    this.getAllByDto()
  }

  getAll(){
    this.rentService.getAll().subscribe(response=>{
      this.rents=response.data
    })
  }

  getAllByDto(){
    this.rentService.getAllDto().subscribe(response=>{
      this.rentDtos=response.data
    })
  }
}
