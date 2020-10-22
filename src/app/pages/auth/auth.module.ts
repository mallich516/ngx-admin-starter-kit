import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import {
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbSelectModule,
} from "@nebular/theme";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from '../../app-routing.module';
import { PagesRoutingModule } from '../pages-routing.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbLayoutModule,
    NbSelectModule,
    PagesRoutingModule
  ],
  exports: [LoginComponent, SignupComponent],
})
export class AuthModule {}
