import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./ui/product/product.component";
import {CustomerComponent} from "./ui/customer/customer.component";
import {AuthGuard} from "./guards/auth.guard";
import {OrderComponent} from "./ui/order/order.component";
import {OrderDetailsComponent} from "./ui/order-details/order-details.component";

const routes: Routes = [
  {
    path : "product",
    component : ProductComponent,
    canActivate : [AuthGuard],
    data : {
      roles : ['ADMIN']
    }
  },
  {
    path : "customer",
    component : CustomerComponent,
    canActivate : [AuthGuard],
    data : {
      roles : ['USER']
    }
  },
  {
    path : "order",
    component : OrderComponent,
    canActivate : [AuthGuard],
    data : {
      roles : ['USER']
    }
  },
  {
    path : "order-details/:id",
    component : OrderDetailsComponent,
    canActivate : [AuthGuard],
    data : {
      roles : ['USER']
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
