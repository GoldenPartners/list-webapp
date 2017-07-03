import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { routing, appRoutingProviders } from "./app.routing";

// Components
import { AppComponent } from './app.component';
import { ErrorComponent } from "./components/error.component";
import { HomeComponent } from './components/home.component';
import { NavBarComponent } from "./components/navbar.component";
import { LoginComponent } from "./components/login.component";

// Services
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
