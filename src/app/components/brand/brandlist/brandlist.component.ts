import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.css']
})
export class BrandlistComponent implements OnInit {

  brands:Brand[]
  constructor(private brandService:BrandService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.brandService.getAll().subscribe(response=>{
      this.brands=response.data
    })
  }

  delete(brand:Brand){
    this.brandService.delete(brand).subscribe(response=>{
      this.toastrService.success("Marka silindi","Başarılı")
    })
  }
}
