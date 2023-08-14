import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Amarihealth } from '../amarihealth';
import { AmarihealthService } from '../amarihealth.service';
@Component({
  selector: 'app-amarihealth',
  templateUrl: './amarihealth.component.html',
  styleUrls: ['./amarihealth.component.scss']
})
export class AmarihealthComponent implements OnInit {

  date = new Date();
  serializedDate = new Date();
  submitted = false;
  outputData='';

  varAmariHealth: Amarihealth = new Amarihealth();

  constructor(private amarihealthservice: AmarihealthService) { }
  ngOnInit(): void {
    this.submitted = false;
  }

  amarihealthsaveform = new FormGroup({
    worked_date: new FormControl(''),
    dos: new FormControl('', [Validators.required]),
    encounter_number: new FormControl('', [Validators.required]),
    no_of_insurance_available: new FormControl('', [Validators.required]),
    no_of_insurance_verified: new FormControl('', [Validators.required]),
    payer: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    pre_sdc: new FormControl('', [Validators.required]),
    sub_self: new FormControl('', [Validators.required]),
    par_cob: new FormControl('', [Validators.required]),
    auth_no: new FormControl('', [Validators.required]),
    per: new FormControl('', [Validators.required]),
    schedule_phone: new FormControl('', [Validators.required]),
    copay: new FormControl('', [Validators.required]),
    ded: new FormControl('', [Validators.required]),
    oop: new FormControl('', [Validators.required]),
    coinsurance: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    outputData: new FormControl(''),
  });

  saveAmariHealth(varAmariHealth) {
    this.varAmariHealth = new Amarihealth();
    this.varAmariHealth.worked_date = this.WorkedDate.value;
    this.varAmariHealth.dos = this.Dos.value;
    this.varAmariHealth.encounter_number = this.EncounterNumber.value;
    this.varAmariHealth.no_of_insurance_available = this.InsuranceAvailable.value;
    this.varAmariHealth.no_of_insurance_verified = this.InsuranceVerified.value;
    this.varAmariHealth.payer = this.Payer.value;
    this.varAmariHealth.status = this.Status.value;
    this.varAmariHealth.outputData =
      this.PreSdc.value +
      ' ' +
      this.SubSelf.value +
      ' ' +
      this.ParCob.value +
      ' ' +
      this.AuthNo.value +
      ' ' +
      this.Per.value +
      '' +
      this.SchedulePhone.value +
      '' +
      this.Copay.value +
      '' +
      this.Ded.value +
      '' +
      this.Oop.value +
      '' +
      this.Coinsurance.value +
      '' +
      this.Type.value;


    this.submitted = true;
    this.save();
    this.clearFields();
  }

  generateOutput(){

  }

  clearFields() {
//   this.worked_date.setValue(null);
//   this.dos.setValue(null);
//   this.encounter_number.setValue(null);
//   this.no_of_insurance_available.setValue(null);
//   this.no_of_insurance_verified.setValue(null);
//   this.payer.setValue(null);
//   this.status.setValue(null);
//   this.pre_sdc.setValue(null);
//   this.sub_self.setValue(null);
//   this.par_cob.setValue(null);
//   this.auth_no.setValue(null);
//   this.per.setValue(null);
//   this.schedule_phone.setValue(null);
//   this.copay.setValue(null);
//   this.ded.setValue(null);
//   this.oop.setValue(null);
//   this.coinsurance.setValue(null);
//   this.type.setValue(null);
  }

  save() {
    this.amarihealthservice
      .saveAmariHealth(this.varAmariHealth)
      .subscribe((data) => console.log(data));
    console.log("Saved Sucessfully...");
    this.submitted = false;
  }

  get WorkedDate() {
    return this.amarihealthsaveform.get('worked_date');
  }

  get Dos() {
    return this.amarihealthsaveform.get('dos');
  }

  get EncounterNumber() {
    return this.amarihealthsaveform.get('encounter_number');
  }

  get InsuranceAvailable() {
    return this.amarihealthsaveform.get('no_of_insurance_available');
  }

  get InsuranceVerified() {
    return this.amarihealthsaveform.get('no_of_insurance_verified');
  }

  get Payer() {
    return this.amarihealthsaveform.get('payer');
  }

  get Status() {
    return this.amarihealthsaveform.get('status');
  }

  get PreSdc() {
    return this.amarihealthsaveform.get('pre_sdc');
  }

  get SubSelf() {
    return this.amarihealthsaveform.get('sub_self');
  }

  get ParCob() {
    return this.amarihealthsaveform.get('par_cob');
  }

  get AuthNo() {
    return this.amarihealthsaveform.get('auth_no');
  }

  get Per() {
    return this.amarihealthsaveform.get('per');
  }
  get SchedulePhone() {
    return this.amarihealthsaveform.get('schedule_phone');
  }

  get Copay() {
    return this.amarihealthsaveform.get('copay');
  }

  get Ded() {
    return this.amarihealthsaveform.get('ded');
  }

  get Oop() {
    return this.amarihealthsaveform.get('oop');
  }

  get Coinsurance() {
    return this.amarihealthsaveform.get('coinsurance');
  }

  get Type() {
    return this.amarihealthsaveform.get('type');
  }

  get Output(){
    return this.amarihealthsaveform.get('outputData');
  }

  set
}
