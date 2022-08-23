import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router, Routes} from "@angular/router";
import {ProductServiceService} from "../../services/product-service.service";
import {Product} from "../../../models/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  product: Product[] = this.productservice.products;
  productedit: Product= new Product(0,"","",0,true);
  constructor(private route: ActivatedRoute,private router: Router, private productservice: ProductServiceService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get("id")
      for (const p of this.product) {
        if (p.id == this.id){
          this.productedit = p;
          console.log(this.productedit)
        }
      }
    })
  }

  editForm = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl("", Validators.minLength(10)),
    img: new FormControl("", Validators.minLength(10)),
    price: new FormControl(null, Validators.min(10)),
    status: new FormControl(true),
  })

  edit(): void{
    if (this.editForm.valid){
      this.productservice.edit(this.productservice.finbyindex(this.productedit.id),this.editForm.value);
      this.router.navigate(["/"]);
    }
  }

}
