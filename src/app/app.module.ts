import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { routing, appRoutingProviders } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from "./auth/login.component";
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from "./shared/components/navbar.component";
import { ErrorComponent } from "./shared/components/error.component";
import { WelcomeComponent } from "./home/welcome.component";
import { SettingsComponent } from "./settings/settings.component";
import { ChangePasswordComponent } from "./settings/change-password.component";
import { UserInfoComponent } from "./settings/user-info.component";

// Services
import { AuthService } from "./auth/auth.service";
import { AuthenticationGuard } from "./shared/services/authentication.guard";

// Validators
import { EqualValidator } from "./shared/directives/equal-validator.directive";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    ErrorComponent,
    WelcomeComponent,
    SettingsComponent,
    ChangePasswordComponent,
    UserInfoComponent,
    EqualValidator
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
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
