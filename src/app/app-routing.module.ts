import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent},
  { path: "product", component: ProductPageComponent},
  { path: "edit", component: EditPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
