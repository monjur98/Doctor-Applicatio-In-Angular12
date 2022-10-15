import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  modalMedicine = false;
  morning = false;
  afternoon = false;
  evening = false;
  constructor() { }

  ngOnInit(): void {
  }
}
