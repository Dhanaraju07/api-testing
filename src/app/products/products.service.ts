import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Products[]>('https://dummyjson.com/products');
  }
}
