import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

fdescribe('ProductsService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ProductsService;

  let Products = [
    {
      id: 1,
      title: 'iPhone 9',
      price: 549,
    },
    {
      id: 2,
      title: 'iPhone 9',
      price: 549,
    },
    {
      id: 3,
      title: 'iPhone 9',
      price: 549,
    },
  ];

  let errMsg = '404 Not Found';
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProductsService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return all the products data', () => {
    httpClientSpy.get.and.returnValue(of(Products));
    service.getAllProducts().subscribe({
      next: (products) => {
        expect(products).toEqual(Products);
      },
      error: (err) => {
        expect(err).toEqual(errMsg);
      },
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });
});
