import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { ProductsComponent } from './components/products/products.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { WebComponent } from './components/card/web/web.component';
import { MobileComponent } from './components/card/mobile/mobile.component';
import { EmptyCartComponent } from './components/card/empty-cart/empty-cart.component';
import { PersonalDataStepperComponent } from './components/form/personal-data-stepper/personal-data-stepper.component';
import { MethodDataStepperComponent } from './components/form/method-data-stepper/method-data-stepper.component';
import { PaypalMethodComponent } from './components/form/paypal-method/paypal-method.component';
import { BlikMethodComponent } from './components/form/blik-method/blik-method.component';
import { CreditCardMethodComponent } from './components/form/credit-card-method/credit-card-method.component';
import { SummaryComponent } from './components/form/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductsComponent,
    CardComponent,
    ListProductsComponent,
    WrapperComponent,
    FormComponent,
    WebComponent,
    MobileComponent,
    EmptyCartComponent,
    PersonalDataStepperComponent,
    MethodDataStepperComponent,
    PaypalMethodComponent,
    BlikMethodComponent,
    CreditCardMethodComponent,
    SummaryComponent,
  ],
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatStepperModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatSliderModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
