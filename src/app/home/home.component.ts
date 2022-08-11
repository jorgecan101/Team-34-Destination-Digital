import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // takeScenario() {
  //   let scenario = 1;
  //   this.router.navigate(['/floor-plan', {id : scenario}]);
  // }

 fnShow(){
    document.getElementById('divVisitorType').style.display ='block';
    document.getElementById('divBookingType').style.display ='none';
    }
   fnOffice(){
    document.getElementById('divOffice').style.display ='block';
    document.getElementById('divVisitorType').style.display ='none';
    
    }
   fnVisitor(){
    document.getElementById('divVisitor').style.display ='block';
    document.getElementById('divVisitorType').style.display ='none';
    
    }
    
   fnBooking(){
      document.getElementById('divOffice').style.display ='none';
      if(document.getElementById("chkAccessibility")['checked']){
      document.getElementById('divOfficeListWithoutA').style.display ='none';
      document.getElementById('divOfficeListWithA').style.display ='block';
      }
      else{
      document.getElementById('divOfficeListWithoutA').style.display ='block';
      document.getElementById('divOfficeListWithA').style.display ='none';
      }
    }
   fnVisitorBooking(){
      document.getElementById('divVisitor').style.display ='none';
      if(document.getElementById("chkVAccessibility")['checked']){
      document.getElementById('divOfficeListWithoutA').style.display ='none';
      document.getElementById('divOfficeListWithA').style.display ='block';
      }
      else{
      document.getElementById('divOfficeListWithoutA').style.display ='block';
      document.getElementById('divOfficeListWithA').style.display ='none';
      }
    }
   fnMyBooking(objDiv,objDeskId,objEthernetport,objDesktop,objMonitor,objKeyboard,objMouse,objWashroom,objExit,objPrivacy){
      document.getElementById('divOfficeListWithA').style.display ='none';	
      document.getElementById('divBooking').style.display ='block';
      document.getElementById('lblDeskIdValue')['value']  = objDeskId;	
      document.getElementById('lblEthernetportValue')['value'] = objEthernetport;
      document.getElementById('lblDesktopValue')['value'] = objDesktop;
      document.getElementById('lblMonitorValue')['value'] = objMonitor;
      document.getElementById('lblKeyboardValue')['value'] = objKeyboard;
      document.getElementById('lblMouseValue')['value'] = objMouse;
      document.getElementById('lblwashroomValue')['value'] = objWashroom;
      document.getElementById('lblExitValue')['value'] = objEthernetport;
      document.getElementById('lblPrivacyValue')['value'] = objPrivacy;
    }
   fnBookingComplete(){
    
    document.getElementById('divBooking').style.display ='none';	
      document.getElementById('divComplete').style.display ='block';
    }
}
