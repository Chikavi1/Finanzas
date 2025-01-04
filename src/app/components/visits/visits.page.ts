import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.page.html',
  styleUrls: ['./visits.page.scss'],
})
export class VisitsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


  goBack() {
    this.modalController.dismiss();
  }


  create() {
    this.modalController.dismiss();
    
  }
}
