import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'product', component: ProductListComponent},
  { path: 'manager', component: ProductManagerComponent},
  { path: 'product/add', component: ProductAddComponent},
  { path: 'product/:productID', component: ProductDetailComponent},
    { path: 'product/edit/:productID', component: ProductEditComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'about', component: AboutComponent}, 
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-manager', component: ProductManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
