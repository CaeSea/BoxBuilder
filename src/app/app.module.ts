// Angular Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Routing
import { AppRoutingModule } from "./app-routing.module";
// Pages
import { LandingComponent } from "./pages/landing/landing.component";
import { BoxChoiceComponent } from "./pages/box-choice/box-choice.component";
import { ProductComponent } from './pages/product/product.component';
import { BuilderComponent } from './pages/builder/builder.component';
// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CartComponent } from './components/cart/cart.component';
// Material
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      BoxChoiceComponent,
      BuilderComponent,
      LandingComponent,
      CartComponent,
      ProductComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatMenuModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatTabsModule,
      MatStepperModule
   ],
   exports: [
      MatMenuModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatTabsModule,
      MatStepperModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
