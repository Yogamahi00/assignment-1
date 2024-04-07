import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

const routes: Routes = [
  {path:'' , redirectTo:'product-list',pathMatch:'full'},
  {path:'product-list', component:ProductListComponent},
  {path:'product-add', component:ProductAddComponent},
  {path:'product-edit/:id', component:ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
