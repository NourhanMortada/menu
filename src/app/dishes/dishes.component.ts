import { Component, OnInit } from '@angular/core';
import { Meals } from '../Meals';
  

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor() { }

  imgSrc:string="";
  name:string="";
  price:number=1;


  meals=Meals;

 


  selected(x:any){
    
    this.imgSrc=x.image;
    this.name=x.name;
    this.price=x.price;
  }


  

  ngOnInit(): void {
  }

}
