import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: '', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
