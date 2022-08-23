import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductServiceService} from "../../services/product-service.service";
import {Router} from "@angular/router";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public productService: ProductServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }
  productcreate: Product= new Product(0,"","",0,true);


  createForm = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl("", Validators.minLength(10)),
    img: new FormControl("", Validators.minLength(10)),
    price: new FormControl(null, Validators.min(10)),
    status: new FormControl(true),
  })

  clealForm = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl("", Validators.minLength(10)),
    img: new FormControl("", Validators.minLength(10)),
    price: new FormControl(null, Validators.min(10)),
    status: new FormControl(true),
  })

  create() {
    if (this.createForm.valid) {
      this.createForm.get("status")?.setValue((this.createForm.get("status")?.value) == 'true' ? true : false);
      this.productcreate = this.createForm.value;
      // xoa di cac value sau khi create
      this.createForm = this.clealForm;
      this.productService.create(this.productcreate);
      this.router.navigate(["/"]);
    }
  }

}
