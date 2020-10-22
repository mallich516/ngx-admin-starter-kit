import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbGlobalPhysicalPosition,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbRadioModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTableModule,
  NbToastrModule,
  NbToastrService,
  NbToggleModule,
} from "@nebular/theme";

import { ThemeModule } from "../../@theme/theme.module";
import { AuthModule } from "../auth/auth.module";
import { DashboardComponent } from "./dashboard.component";
import { ViewAllpostsComponent } from "./view-allposts/view-allposts.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { ViewPostComponent } from "./view-post/view-post.component";
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { AcceptedreferralsComponent } from './acceptedreferrals/acceptedreferrals.component';
import { RejectedreferralsComponent } from './rejectedreferrals/rejectedreferrals.component';
import { PendingreferralsComponent } from './pendingreferrals/pendingreferrals.component';
import { ViewreferralComponent } from './viewreferral/viewreferral.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewalliedhealthComponent } from './viewalliedhealth/viewalliedhealth.component';
import { AddalliedhealthComponent } from './addalliedhealth/addalliedhealth.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbCheckboxModule,
    NbRadioModule,
    NbToggleModule,
    NbAlertModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    NbTableModule,
    NbLayoutModule,
    NbListModule,
    NbSpinnerModule,
    NbIconModule,
    NbToastrModule.forRoot({
      position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
      preventDuplicates: true,
    }),
  ],
  declarations: [
    DashboardComponent,
    ViewAllpostsComponent,
    AddPostComponent,
    ViewPostComponent,
    DynamicFormComponent,
    AcceptedreferralsComponent,
    RejectedreferralsComponent,
    PendingreferralsComponent,
    ViewreferralComponent,
    ProductsComponent,
    AddproductComponent,
    ViewalliedhealthComponent,
    AddalliedhealthComponent
  ],
})
export class DashboardModule {}
