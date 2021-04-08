import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]
  currentColor:Color
  filterText=""
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getAll()
  }


  getAll(){
    this.colorService.getAll().subscribe(response=>{
      this.colors=response.data
    })
  }

  setCurrentColor(color:Color){
    this.currentColor=color
  }

  getCurrentColorByClass(color:Color){
    if(this.currentColor==color){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
