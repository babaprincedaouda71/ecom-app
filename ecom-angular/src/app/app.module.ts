import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './ui/product/product.component';
import { CustomerComponent } from './ui/customer/customer.component';
import {HttpClientModule} from "@angular/common/http";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { OrderComponent } from './ui/order/order.component';
import { OrderDetailsComponent } from './ui/order-details/order-details.component';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'ecom-real',
        clientId: 'ecom-client-angular'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    OrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide : APP_INITIALIZER,
      useFactory : initializeKeycloak,
      multi : true,
      deps : [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
