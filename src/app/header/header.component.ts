import { Component, Input, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements  OnInit, DoCheck, OnChanges {
  title = "Angular Shopping Cart"

  @Input()
  countItems: number | undefined;

  constructor() { }

    // 1.run khi được binding từ cha
    ngOnChanges(changes: SimpleChanges): void {
      console.log("HeaderComponent ngOnChanges")
    }

    ///3. gọi sau ngOnChange sau khi có sự thay đổi dữ liệu
    // được chạy sau ngOnInit lần đầu tiên
    //Không rõ: Lần đầu tiền component sẽ có call 2 lần đầu doCheck
    //  - 1 Lần là sau khi run onInit, lần 2 là sau khi tạo các component con hoặc không
    //Angular is running in development mode. Call enableProdMode() to enable production mode.:
    //sau console.log dòng này sẽ gọi các doCheck 1 lần nữa từ cha đến con
    ngDoCheck(): void {
      console.log("HeaderComponent ngDoCheck")
    }
    //2. khởi tạo
    ngOnInit(): void {
       console.log("HeaderComponent ngOninit")
    }

}
