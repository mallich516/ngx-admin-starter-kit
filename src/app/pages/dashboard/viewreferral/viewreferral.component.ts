import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Referrals, ReferralsService } from '../../../services/referrals.service';

@Component({
  selector: 'ngx-viewreferral',
  templateUrl: './viewreferral.component.html',
  styleUrls: ['./viewreferral.component.scss']
})
export class ViewreferralComponent implements OnInit {

  selectedReferral: Referrals;

  constructor(private referral: ReferralsService, private location: Location) { }

  ngOnInit(): void {

    this.selectedReferral = this.referral.getReferral();
    if (this.selectedReferral == null) {
      this.location.back();
    }

  }

}
