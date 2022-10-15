import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent implements OnInit {

  bloodSugarFasting = false;
  bloodSugar = false;
  bloodSugarPP = false;
  covidRAT = false;
  ecG = false;
  haemoglobin = false;
  bloodPressure = false;
  oxygenInBlood = false;
  physiotherapy = false;

  constructor() { }

  ngOnInit(): void {
  }

}
