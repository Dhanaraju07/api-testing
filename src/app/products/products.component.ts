import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Products } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products?: Products[];
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((res: any) => {
      console.log(res);
      this.products = res.products;
    });
  }
}
