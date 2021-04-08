import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  brands:Brand[]
  colors:Color[]

  currentColor:number
  currentBrand:number
  constructor(private colorService:ColorService,private brandService:BrandService) { }

  ngOnInit(): void {
    this.getColors()
    this.getBrands()
  }

  getColors(){
    this.colorService.getAll().subscribe(response=>{
      this.colors=response.data
    })
  }

  getBrands(){
    this.brandService.getAll().subscribe(response=>{
      this.brands=response.data
    })
  }

  setCurrentBrand(brandId:number){
    this.currentBrand=brandId
  }

  setCurrentColor(colorId:number){
    this.currentColor=colorId
  }
}
