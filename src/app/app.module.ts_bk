import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { routing, appRoutingProviders } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/components/error.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './shared/components/navbar.component';
import { LoginComponent } from './auth/login.component';

// Services
import { AuthService } from './auth/auth.service';
import { CanActivateGuard} from './shared/services/canactivate.guard';

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
    AuthService,
    CanActivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
