import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, DoCheck , OnChanges} from '@angular/core';
import { Product } from 'src/model/Product';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, DoCheck, OnChanges {

  @Input()
  products: Product[] = [];

  @Output()
  onRemoveItem = new EventEmitter<number>();

  constructor() { }

  // 1.run khi được binding từ cha
  ngOnChanges(changes: SimpleChanges): void {
    console.log("BodyComponent ngOnChanges")
  }

  ///3. gọi sau ngOnChange sau khi có sự thay đổi dữ liệu
  // được chạy sau ngOnInit lần đầu tiên
  ngDoCheck(): void {
    console.log("BodyComponent ngDoCheck")
  }
  //2. khởi tạo
  ngOnInit(): void {
     console.log("BodyComponent ngOninit")
  }

  removeItem(element: HTMLElement){
    this.onRemoveItem.emit(parseInt(element.id));
  }
}
