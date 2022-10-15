import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  goToRegisterPatient($myParam: string = ''): void {
    const navigationLink: string[] = ['/patient'];
    if ($myParam.length) {
      navigationLink.push($myParam);
    }
    this.router.navigate(navigationLink);
  }

  ngOnInit(): void {
  }

}
