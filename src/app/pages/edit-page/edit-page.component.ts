import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  products: any = [];

  savedProduct: any;
  editProduct: any = {
    id: 0,
    name: "",
    price: "",
    description: "",
    image: "",
    stars: "",
  };

  editMode: boolean = false;

  data: any = {};
  id: number = 0;

  // updated: boolean = false;

  productForm! : FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get().subscribe((res: any) => {
      console.log(res);
      this.products = res;
    })

    this.savedProduct = this.apiService.getSave();
    console.log(this.savedProduct);

    if (Object.keys(this.savedProduct).length === 0) {
      this.editMode = false;
      return;
    } else {
      this.editMode = true;
      let {"0": mappedProduct} = this.savedProduct;
      this.editProduct = mappedProduct;
    }

    this.productForm = this.formBuilder.group({
      name: [this.editProduct.name, [Validators.required]],
      price: [this.editProduct.price, [Validators.required]],
      description: [this.editProduct.description, [Validators.required]],
      image: [this.editProduct.image, [Validators.required]],
      stars: [this.editProduct.stars, [Validators.required]],
    })
  }

  submit () {
    if (this.editMode = false) {

      this.id = this.products.length + 1;
      this.data = {"id": this.id, ...this.productForm.value};
      console.log(this.data);
      this.apiService.post(this.data);

    } else if (this.editMode = true) {

      this.id = this.editProduct.id;
      this.data = {"id": this.id, ...this.productForm.value};
      console.log(this.data);
      this.apiService.put(this.data);

    }
  }

  update () {
    this.id = this.editProduct.id;
    this.data = {"id": this.id, ...this.productForm.value};
  }

}
