import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.page.html',
  styleUrls: ['./gift.page.scss'],
})
export class GiftPage implements OnInit {

  constructor(private modalController: ModalController) { }
  step = 1;
  ngOnInit() {
  }

  next(){
    this.step++;
  }

  buy(){
    this.step = 3
  }

  goBack() {
    this.modalController.dismiss();
  }

}
