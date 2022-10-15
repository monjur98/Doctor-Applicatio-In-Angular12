import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  ageType: any[] = [];
  gender: any[] = [];
  occupation: any[] = [];
  state: any[] = [];
  district: any[] = [];
  policeStation: any[] = [];
  familyMember: any[] = [];
  fileToUpload: any;
  imageUrl: any;
  tobaccoSticks = false;
  alcoholCups = false;
  constructor() {
    this.ageType = [
      { name: 'Years', code: 0 },
      { name: 'Months', code: 1 },
      { name: 'Days', code: 3 },
    ];
    this.gender = [
      { name: 'Male', code: 0 },
      { name: 'Female', code: 1 },
      { name: 'Other', code: 2 },
    ];
    this.occupation = [
      { name: 'Student', code: 0 },
      { name: 'Homemaker', code: 1 },
      { name: 'Mason', code: 2 },
    ];
    this.familyMember = [
      { name: 'Parent', code: 0 },
      { name: 'Spouse', code: 1 },
      { name: 'Other Relationship', code: 2 },
    ];
  }

  profileFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    //--- Show Image Preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  ngOnInit(): void {
  }

  onToggleTobacco() {
    this.tobaccoSticks = !this.tobaccoSticks;
  }
  onToggleAlcohol() {
    this.alcoholCups = !this.alcoholCups;
  }
}
