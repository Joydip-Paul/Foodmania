import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any = [];
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.httpClient.get("assets/json/data.json").subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }

}
