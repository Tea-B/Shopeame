import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent implements OnInit {

  products: any = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
      this.apiService.get().subscribe((res: any) => {
      console.log(res);
      this.products = res;
    })
  }

  edit (id: number) {
    id = id + 1;
    let result = this.products.filter((comic: any) => comic.id == id);
    this.apiService.save(result);

    this.router.navigate(["/edit"])
  }

}
