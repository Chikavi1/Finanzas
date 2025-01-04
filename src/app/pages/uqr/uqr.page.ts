import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-uqr',
  templateUrl: './uqr.page.html',
  styleUrls: ['./uqr.page.scss'],
})
export class UqrPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  closeModal() {  
    this.modalController.dismiss();
  }


}
