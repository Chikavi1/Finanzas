import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router:Router) {
  
    console.log(localStorage.getItem('intro'));
    
    this.router.navigateByUrl('/');
    // if(localStorage.getItem('intro')) {
    // }else {
    //   this.router.navigateByUrl('/intro');

    // }
  } 




}
