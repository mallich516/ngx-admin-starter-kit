import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ReferralsService {

  referral: Referrals;
 
  constructor() { }

  setReferral(referral: Referrals) {
    this.referral = referral;
  }

  getReferral(): Referrals {
    return this.referral;
  }

}

export interface Referrals {
  patient: Patient,
  practitioner: Practitioner,
  provider: Provider
}

export interface Patient {
  patientName: string,
  refferalSent: string,
  alliedHealthName: string,
  comment: string,
  referralAcceptedOn: string,
  gender: string,
  address: string,
  dob: string 
}

export interface Practitioner {
  name: string,
  gender: string,
  address: string,
  dob: string
}

export interface Provider {
  name: string,
  speciality: string,
  address: string,
  phone: string,
  email: string
}