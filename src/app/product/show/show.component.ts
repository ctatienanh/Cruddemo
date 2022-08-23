import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../../services/product-service.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(public productService: ProductServiceService) { }

  ngOnInit(): void {
  }


}
