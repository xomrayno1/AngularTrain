import { Component,  OnInit, DoCheck, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <section class="container">
      <div class="promotion">
        <label for="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <button type="button"></button>
      </div>
      <div class="summary">
        <ul>
          <li>Subtotal <span>$ {{SubTotal}}</span></li>
          <li>Tax <span>$5.00</span></li>
          <li class="total">Total <span>$ {{Total}}</span></li>
        </ul>
      </div>
      <div class="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  `
})
export class FooterComponent implements  OnInit, DoCheck, OnChanges {

  @Input()
  Total: number = 0;
  @Input()
  SubTotal: number = 0;

  constructor() { }

   // 1.run khi được binding từ cha
  ngOnChanges(changes: SimpleChanges): void {
    console.log("FooterComponent ngOnChanges")
  }

  ///3. gọi sau ngOnChange sau khi có sự thay đổi dữ liệu
  // được chạy sau ngOnInit lần đầu tiên
  //Không rõ: Lần đầu tiền component sẽ có call 2 lần đầu doCheck
  //  - 1 Lần là sau khi run onInit, lần 2 là sau khi tạo các component con hoặc không
  //Angular is running in development mode. Call enableProdMode() to enable production mode.:
  //sau console.log dòng này sẽ gọi các doCheck 1 lần nữa từ cha đến con
  ngDoCheck(): void {
    console.log("FooterComponent ngDoCheck")
  }
  //2. khởi tạo
  ngOnInit(): void {
     console.log("FooterComponent ngOninit")
  }

}
