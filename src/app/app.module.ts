// Angular Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Routing
import { AppRoutingModule } from "./app-routing.module";
// Pages
import { LandingComponent } from "./pages/landing/landing.component";
import { BoxChoiceComponent } from "./pages/box-choice/box-choice.component";
import { ProductComponent } from "./pages/product/product.component";
import { BuilderComponent } from "./pages/builder/builder.component";
// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CartComponent } from "./components/cart/cart.component";
// Pipes
import { CapitalisePipe } from "./pipes/capitalise.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoxChoiceComponent,
    BuilderComponent,
    LandingComponent,
    CartComponent,
    ProductComponent,
    CapitalisePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
