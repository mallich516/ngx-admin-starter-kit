import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ViewAllpostsComponent } from "./dashboard/view-allposts/view-allposts.component";
import { AddPostComponent } from "./dashboard/add-post/add-post.component";
import { ViewPostComponent } from "./dashboard/view-post/view-post.component";
import { DynamicFormComponent } from './dashboard/dynamic-form/dynamic-form.component';
import { DashboardGuard } from '../guards/dashboard.guard';
import { AcceptedreferralsComponent } from './dashboard/acceptedreferrals/acceptedreferrals.component';
import { RejectedreferralsComponent } from './dashboard/rejectedreferrals/rejectedreferrals.component';
import { PendingreferralsComponent } from './dashboard/pendingreferrals/pendingreferrals.component';
import { ViewreferralComponent } from './dashboard/viewreferral/viewreferral.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { AddproductComponent } from './dashboard/addproduct/addproduct.component';
import { ViewalliedhealthComponent } from './dashboard/viewalliedhealth/viewalliedhealth.component';
import { AddalliedhealthComponent } from './dashboard/addalliedhealth/addalliedhealth.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [DashboardGuard]
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: SignupComponent,
      },
      {
        path: "addproduct",
        component: AddproductComponent
      },
      {
        path: "addproduct",
        component: AddproductComponent
      },
      {
        path: "view-allposts",
        component: ViewAllpostsComponent,
      },
      {
        path: "add-post",
        component: AddPostComponent,
      },
      {
        path: "view-post/:id",
        component: ViewPostComponent,
      },
      {
        path: "dynamic-form",
        component: DynamicFormComponent
      },
      {
        path: "pending-referrals",
        component: PendingreferralsComponent,
      },
      {
        path: "pending-referrals/view-referral",
        component: ViewreferralComponent
      },
      {
        path: "accepted-referrals",
        component: AcceptedreferralsComponent,
      },
      {
        path: "accepted-referrals/view-referral",
        component: ViewreferralComponent
      },
      {
        path: "rejected-referrals",
        component: RejectedreferralsComponent,
      }, 
      {
        path: "rejected-referrals/view-referral",
        component: ViewreferralComponent
      },
      { 
        path: "products",
        component: ProductsComponent
      },
      {
        path: "addproduct",
        component: AddproductComponent
      },
      {
        path: "viewalliedhealth",
        component: ViewalliedhealthComponent
      },
      {
        path: "addalliedhealth",
        component: AddalliedhealthComponent
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
    ],
  },
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
