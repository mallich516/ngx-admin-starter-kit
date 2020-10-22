import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReferralsService } from '../../../services/referrals.service';

@Component({
  selector: 'ngx-acceptedreferrals',
  templateUrl: './acceptedreferrals.component.html',
  styleUrls: ['./acceptedreferrals.component.scss']
})
export class AcceptedreferralsComponent implements OnInit {

  acceptedReferralsArray = [
    {
      patient: {
        patientName: "Mr Devid Anderson",
        refferalSent: "Admin Hospital",
        alliedHealthName: "Susan Chariton Dermatology",
        comment: "Dear Dr A Practitioner, I would be happy to accept Mr David Andreson and will contact the patient on their contact information 61 wallance street, Bundaberg QLD, 4670 provided and book an appointment with them. Thanks Dr Mary Bolggs",
        referralAcceptedOn: "12 Oct 2020",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      practitioner: {
        name: "APractitioner",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      provider: {
        name: "Susan Charlton Dermatology",
        speciality: "Sermatology",
        address: "Melbourne",
        phone: "0742345785",
        email: "charlton.s@hcn.samplesdb.com.au"
      }
    },
    {
      patient: {
        patientName: "Mr Fred Andrews",
        refferalSent: "Admin Hospital",
        alliedHealthName: "Susan Chariton Dermatology",
        comment: "Dear Dr A Practitioner, I would be happy to accept Mr David Andreson and will contact the patient on their contact information 61 wallance street, Bundaberg QLD, 4670 provided and book an appointment with them. Thanks Dr Mary Bolggs",
        referralAcceptedOn: "01 Sep 2020",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      practitioner: {
        name: "APractitioner",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      provider: {
        name: "Susan Charlton Dermatology",
        speciality: "Sermatology",
        address: "Melbourne",
        phone: "0742345785",
        email: "charlton.s@hcn.samplesdb.com.au"
      }
    },
    {
      patient: {
        patientName: "Mr Devid Anderson",
        refferalSent: "Admin Hospital",
        alliedHealthName: "Susan Chariton Dermatology",
        comment: "Dear Dr A Practitioner, I would be happy to accept Mr David Andreson and will contact the patient on their contact information 61 wallance street, Bundaberg QLD, 4670 provided and book an appointment with them. Thanks Dr Mary Bolggs",
        referralAcceptedOn: "12 Oct 2020",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      practitioner: {
        name: "APractitioner",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      provider: {
        name: "Susan Charlton Dermatology",
        speciality: "Sermatology",
        address: "Melbourne",
        phone: "0742345785",
        email: "charlton.s@hcn.samplesdb.com.au"
      }
    },
    {
      patient: {
        patientName: "Mr Devid Anderson",
        refferalSent: "Admin Hospital",
        alliedHealthName: "Susan Chariton Dermatology",
        comment: "Dear Dr A Practitioner, I would be happy to accept Mr David Andreson and will contact the patient on their contact information 61 wallance street, Bundaberg QLD, 4670 provided and book an appointment with them. Thanks Dr Mary Bolggs",
        referralAcceptedOn: "12 Oct 2020",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      practitioner: {
        name: "APractitioner",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      provider: {
        name: "Susan Charlton Dermatology",
        speciality: "Sermatology",
        address: "Melbourne",
        phone: "0742345785",
        email: "charlton.s@hcn.samplesdb.com.au"
      }
    },
    {
      patient: {
        patientName: "Mr Devid Anderson",
        refferalSent: "Admin Hospital",
        alliedHealthName: "Susan Chariton Dermatology",
        comment: "Dear Dr A Practitioner, I would be happy to accept Mr David Andreson and will contact the patient on their contact information 61 wallance street, Bundaberg QLD, 4670 provided and book an appointment with them. Thanks Dr Mary Bolggs",
        referralAcceptedOn: "24 Aug 2020",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      practitioner: {
        name: "APractitioner",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      provider: {
        name: "Susan Charlton Dermatology",
        speciality: "Sermatology",
        address: "Melbourne",
        phone: "0742345785",
        email: "charlton.s@hcn.samplesdb.com.au"
      }
    },
    {
      patient: {
        patientName: "Mr Devid Anderson",
        refferalSent: "Admin Hospital",
        alliedHealthName: "Susan Chariton Dermatology",
        comment: "Dear Dr A Practitioner, I would be happy to accept Mr David Andreson and will contact the patient on their contact information 61 wallance street, Bundaberg QLD, 4670 provided and book an appointment with them. Thanks Dr Mary Bolggs",
        referralAcceptedOn: "01 Sep 2020",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      practitioner: {
        name: "APractitioner",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      provider: {
        name: "Susan Charlton Dermatology",
        speciality: "Sermatology",
        address: "Melbourne",
        phone: "0742345785",
        email: "charlton.s@hcn.samplesdb.com.au"
      }
    },
    {
      patient: {
        patientName: "Mr Heather Andrews",
        refferalSent: "Admin Hospital",
        alliedHealthName: "Susan Chariton Dermatology",
        comment: "Dear Dr A Practitioner, I would be happy to accept Mr David Andreson and will contact the patient on their contact information 61 wallance street, Bundaberg QLD, 4670 provided and book an appointment with them. Thanks Dr Mary Bolggs",
        referralAcceptedOn: "21 Aug 2020",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      practitioner: {
        name: "APractitioner",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      provider: {
        name: "Susan Charlton Dermatology",
        speciality: "Sermatology",
        address: "Melbourne",
        phone: "0742345785",
        email: "charlton.s@hcn.samplesdb.com.au"
      }
    },
    {
      patient: {
        patientName: "Carolina Schein",
        refferalSent: "Admin Hospital",
        alliedHealthName: "Susan Chariton Dermatology",
        comment: "Dear Dr A Practitioner, I would be happy to accept Mr David Andreson and will contact the patient on their contact information 61 wallance street, Bundaberg QLD, 4670 provided and book an appointment with them. Thanks Dr Mary Bolggs",
        referralAcceptedOn: "07 Aug 2020",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      practitioner: {
        name: "APractitioner",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      provider: {
        name: "Susan Charlton Dermatology",
        speciality: "Sermatology",
        address: "Melbourne",
        phone: "0742345785",
        email: "charlton.s@hcn.samplesdb.com.au"
      }
    },
    {
      patient: {
        patientName: "Mr John Andrews",
        refferalSent: "Admin Hospital",
        alliedHealthName: "Susan Chariton Dermatology",
        comment: "Dear Dr A Practitioner, I would be happy to accept Mr David Andreson and will contact the patient on their contact information 61 wallance street, Bundaberg QLD, 4670 provided and book an appointment with them. Thanks Dr Mary Bolggs",
        referralAcceptedOn: "04 Aug 2020",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      practitioner: {
        name: "APractitioner",
        gender: "Female",
        address: "1 False Street",
        dob: "29/02/1972"
      },
      provider: {
        name: "Susan Charlton Dermatology",
        speciality: "Sermatology",
        address: "Melbourne",
        phone: "0742345785",
        email: "charlton.s@hcn.samplesdb.com.au"
      }
    },
  ]

  constructor(private route: Router, private referral : ReferralsService) { }

  ngOnInit(): void {
    // this.acceptedReferralsArray.length = 0; 
  }

  viewReferral(referral: any) {
    this.referral.setReferral(referral);
    console.log(referral);
    this.route.navigate(['/pages/accepted-referrals/view-referral']);
  }

}
