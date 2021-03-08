import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'customers', component: CustomersComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
