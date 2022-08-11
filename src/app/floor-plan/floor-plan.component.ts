import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss']
})
export class FloorPlanComponent implements OnInit {

  // Get number as value for different scenarios mentioned before
  // this should change based on what scenario was sent
  scenario: number = 1;
  selectedNumber = -1

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  changeScenario() {
    if (this.scenario === 1) {
      this.scenario = 2;
    }
    else {
      this.scenario = 1;
    }
  }

  // Depending on the scenario, the image should change 

  getImageBasedOnScenario(scenario: number) {
    switch(scenario) {
      case 1:
        return 'assets/images/floor-plans-1.png';
      case 2:
        return 'assets/images/floor-plans-2.png';
      case 3:
        return 'assets/images/floor-plans-2.png';
      default:
        return 'assets/images/floor-plans.png';   
    }
  }

  goToSuccessPage($myParam: string = ''): void {
    // TODO: Change the redirection to the success page
    const navDetails: string[] = ['/home'];
    if ($myParam.length) {
      navDetails.push($myParam);
    }
    this.router.navigate(navDetails);
  }

  @HostListener('window:click', ['$event'])
  getValue(event) {
    for (let coordinate of coordinates) {
      if (coordinate[1][0] < event.clientX && event.clientX < coordinate[2][0] && coordinate[1][1] < event.clientY && event.clientY < coordinate[2][1]) {
        this.selectedNumber = this.selectedNumber == coordinate[0][0] ? -1 : coordinate[0][0]
        
        break;
      }
    }
  }
}
const coordinates = [
  [[1], [318, 185], [372, 274]],
  [[2], [317, 274], [372, 375]],
  [[3], [316, 372], [373, 458]],
  [[4], [331, 501], [413, 557]],
  [[5], [414, 502], [525, 557]],
  [[6], [524, 501], [616, 556]],
  [[19], [418, 256], [452, 291]],
  [[20], [461, 258], [494, 290]], 
  [[21], [500, 258], [533, 287]],
  [[16], [418, 381], [454, 415]],
  [[17], [458, 381], [494, 416]],
  [[18], [499, 383], [533, 416]],
  [[7], [762, 502], [850, 556]],
  [[8], [850, 502], [943, 556]],
  [[9], [943, 502], [1016, 554]],
  [[10], [843, 257], [876, 291]],
  [[11], [883, 254], [918, 289]], 
  [[12], [924, 257], [958, 289]],
  [[13], [841, 382], [875, 415]],
  [[14], [883, 383], [916, 415]],
  [[15], [922, 382], [957, 415]]
]
