import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-episode',
  templateUrl: './new-episode.component.html',
  providers: [MessageService],
  styleUrls: ['./new-episode.component.scss']
})
export class NewEpisodeComponent implements OnInit {
  eyeSlider = false;
  handSlider = false;
  legSlider = false;
  subGynaeProblem = false;
  subPain = false;
  subSwellingTumor = false;
  subUrineProblem = false;
  subWeakness = false;
  checkedAll: boolean = false;
  checked: boolean = false;
  checked1: boolean = false;
  checked2: boolean = false;
  checked3: boolean = false;
  checked4: boolean = false;
  checked5: boolean = false;
  checked6: boolean = false;
  checked7: boolean = false;
  checked8: boolean = false;
  checked9: boolean = false;
  checked10: boolean = false;
  checked11: boolean = false;
  checked12: boolean = false;
  checked13: boolean = false;
  checked14: boolean = false;
  checked15: boolean = false;
  checked16: boolean = false;
  checked17: boolean = false;
  checked18: boolean = false;
  checked19: boolean = false;
  checked20: boolean = false;
  checked21: boolean = false;
  checked22: boolean = false;
  checked23: boolean = false;
  checked24: boolean = false;
  checked25: boolean = false;
  checked26: boolean = false;
  checked27: boolean = false;
  checked28: boolean = false;
  checked29: boolean = false;
  checked30: boolean = false;
  checked31: boolean = false;
  checked32: boolean = false;
  checked33: boolean = false;
  checked34: boolean = false;
  checked35: boolean = false;
  checked36: boolean = false;
  checked37: boolean = false;
  checked38: boolean = false;
  checked39: boolean = false;
  checked40: boolean = false;
  checked41: boolean = false;

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  duration: any[] = [];

  constructor(private messageService: MessageService,) {


    this.duration = [
      { name: 'Days', code: 'Days' },
      { name: 'Months', code: 'Months' },
      { name: 'Years', code: 'Years' }
    ];
  }

  ngOnInit(): void {
  }

  onToggleGynaeProblem() {
    this.subGynaeProblem = !this.subGynaeProblem;
  }
  onTogglePain() {
    this.subPain = !this.subPain;
  }
  onToggleSwellingTumor() {
    this.subSwellingTumor = !this.subSwellingTumor;
  }
  onToggleUrineProblem() {
    this.subUrineProblem = !this.subUrineProblem;
  }
  onToggleWeakness() {
    this.subWeakness = !this.subWeakness;
  }
  // For Scrool to Target
  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({ behavior: 'smooth' });
  // }
}
