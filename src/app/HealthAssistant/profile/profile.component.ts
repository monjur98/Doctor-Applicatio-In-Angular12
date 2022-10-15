import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToNewEpisode($myParam: string = ''): void {
    const navigationLink: string[] = ['/new-episode'];
    if ($myParam.length) {
      navigationLink.push($myParam);
    }
    this.router.navigate(navigationLink);
  }
  goToNewService($myParam: string = ''): void {
    const navigationLink: string[] = ['/new-service'];
    if ($myParam.length) {
      navigationLink.push($myParam);
    }
    this.router.navigate(navigationLink);
  }
  goToBilling($myParam: string = ''): void {
    const navigationLink: string[] = ['/bill'];
    if ($myParam.length) {
      navigationLink.push($myParam);
    }
    this.router.navigate(navigationLink);
  }
}
