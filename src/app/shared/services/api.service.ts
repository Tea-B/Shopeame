import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  savedProduct: any = {}

  constructor(private http: HttpClient) { }

  save (data: any) {
    this.savedProduct = {...data}
    console.log(this.savedProduct);

    return this.savedProduct;
  }

  getSave () {
    return this.savedProduct;
  }

  get () {
    return this.http.get("http://localhost:3000/products");
  }

  post (products: any) {
    this.http.post("http://localhost:3000/products", products).subscribe();
    return this.http.get("http://localhost:3000/products");
  }

  put (products: any) {
    this.http.put("http://localhost:3000/products", products).subscribe();
    return this.http.get("http://localhost:3000/products");
  }
}
