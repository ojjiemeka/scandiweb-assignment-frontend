import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Pages/add-product/add-product.component';
import { IndexComponent } from './Pages/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'add-product', component: AddProductComponent},
  // { path: 'create-product', component: CreateProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
