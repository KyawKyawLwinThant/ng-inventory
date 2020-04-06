import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input()
  productList:Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
