import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { products } from '../fakeData/fakeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, OnChanges{

  title = 'Angular Shopping cart';
  products = this.getAllProduct();
  countItems = 0;
  subtotal = 0;
  total = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("AppComponent ngOnChanges")
  }
  ngDoCheck(): void {
   console.log("AppComponent ngDoCheck",this.products);
   this.updateTotalItem();
   this.updateTotalPrice();
  }
  ngOnInit(): void {
     console.log("AppComponent ngOninit");
  }
  updateTotalItem (){
    this.countItems = this.products.map(item => item.quantity).reduce(
      (prevValue, currentvalue) => prevValue + currentvalue,
      0
    );
  }
  updateTotalPrice (){
    this.subtotal = this.products.map(item => item.price * item.quantity).reduce(
      (prevValue, currentvalue) => prevValue + currentvalue,
      0
    );
    this.total = this.subtotal - 5;
  }

  getAllProduct(){
    return products;
  }

  handleOnRemoveItem(id: number){
    this.products = this.products.filter(item => item.id != id);
  }

}
