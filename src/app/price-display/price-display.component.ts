import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {

  constructor() { }
  @Input()
  price:number;

  ngOnInit(): void {
  }

}
