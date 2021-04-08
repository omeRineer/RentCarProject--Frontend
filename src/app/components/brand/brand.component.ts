import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]
  currentBrand:Brand
  filterText=""
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.brandService.getAll().subscribe(response=>{
      this.brands=response.data
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand
  }

  getCurrentBrand(brand:Brand){
    if(this.currentBrand==brand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}