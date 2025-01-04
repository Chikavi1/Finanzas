import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.page.html',
  styleUrls: ['./net-worth.page.scss'],
})
export class NetWorthPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  goBack() {
    this.modalController.dismiss();
  }

}
